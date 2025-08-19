import { DataAPIClient } from "@datastax/astra-db-ts";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT);

async function setupCollection() {
  await db.createCollection("portfolio", {
    vector: {
      dimension: 384, // all-MiniLM-L6-v2 embedding size
      metric: "cosine",
    },
  });

  console.log("✅ Collection created with vector search enabled!");
}

setupCollection();
