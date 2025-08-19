import { createClient } from "@datastax/astra-db-client";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

const ASTRA_DB_APPLICATION_TOKEN = process.env.ASTRA_DB_APPLICATION_TOKEN;
const ASTRA_DB_ENDPOINT = process.env.ASTRA_DB_API_ENDPOINT;

export const db = createClient({
  astraDatabaseId: ASTRA_DB_ENDPOINT,
  applicationToken: ASTRA_DB_APPLICATION_TOKEN,
});
