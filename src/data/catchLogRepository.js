import { db } from "./db";

export async function saveCatch(catchData) {
  return db.catches.add({
    ...catchData,
    createdAt: new Date().toISOString()
  });
}
export async function getCatches() {
  return db.catches.toArray();
}
export async function clearCatches() {
  return db.catches.clear();
}