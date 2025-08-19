import { NextResponse } from "next/server";
import fetch from "node-fetch";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { getEmbedding } from "../../../db/embed.js";

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT);
const collection = await db.collection("portfolio");

export async function POST(req) {
  try {
    const { query } = await req.json();
    if (!query) {
      return NextResponse.json({ error: "Missing query" }, { status: 400 });
    }

    // Step 1: Embed user query
    const embedding = await getEmbedding(query);

    // Step 2: Vector search Astra DB
    const cursor = collection.find(
      {},
      { sort: { $vector: embedding }, limit: 3 }
    );
    const results = await cursor.toArray();

    // If Astra has no relevant context
    let context = "No relevant portfolio data found.";
    if (results.length > 0) {
      context = results.map((r) => r.description).join("\n");
    }

    // Step 3: Call Hugging Face model
    const hfResponse = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn", // or HuggingFaceH4/zephyr-7b-beta if you have access
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `
          You are a helpful portfolio assistant.
          Context: ${context}
          Question: ${query}
          Answer in a friendly and concise way.
          `,
          parameters: {
            max_new_tokens: 200,
            temperature: 0.7,
          },
        }),
      }
    );

    if (!hfResponse.ok) {
      const text = await hfResponse.text();
      throw new Error(`Hugging Face error: ${text}`);
    }

    const data = await hfResponse.json();
    console.log("Data", data);

    // Handle both array + object responses
    let answer =
      Array.isArray(data) && data[0]?.generated_text
        ? data[0].generated_text
        : data[0]?.summary_text
        ? data[0].summary_text
        : data.generated_text || "Sorry, I couldn’t generate an answer.";

    return NextResponse.json({ answer });
  } catch (err) {
    console.error("Error in /api/chat:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
