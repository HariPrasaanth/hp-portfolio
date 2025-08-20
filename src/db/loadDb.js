

import dotenv from "dotenv";
import { getEmbedding } from "./embed.js";
dotenv.config();
import sampleData from "./sample-data.json" with {type: "json"};
import { DataAPIClient } from "@datastax/astra-db-ts";


const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT);

const collection = await db.collection("portfolio");

const loadData = async () => {
  for (const { id, info, description } of sampleData) {
    const embedding = await getEmbedding(description);

    await collection.insertOne({
      document_id: id,
      $vector: embedding,
      info,
      description,
    });

    console.log(`Inserted ${id}`);
  }

  console.log("Data added!");
};

loadData();
