import { pipeline } from "@xenova/transformers";

// Load the embedding model once
const embeddingModel = await pipeline(
  "feature-extraction",
  "Xenova/all-MiniLM-L6-v2"
);

// Function to generate embedding
export async function getEmbedding(text) {
  const result = await embeddingModel(text, {
    pooling: "mean",
    normalize: true,
  });
  return Array.from(result.data); // convert tensor to plain array
}
