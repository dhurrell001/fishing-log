import Dexie from "dexie";

export const db = new Dexie("FishingLogDB");

db.version(1).stores({
  catches: "++id, fishType, catchDate, location, createdAt"
});