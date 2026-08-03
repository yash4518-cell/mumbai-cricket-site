import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let memoryServer: MongoMemoryServer | null = null;

async function connect(uri: string): Promise<void> {
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log(`[db] connected to MongoDB (${mongoose.connection.name})`);

  mongoose.connection.on("error", (err) => {
    console.error("[db] connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("[db] disconnected");
  });
}

export async function connectDB(): Promise<void> {
  const uri = process.env.MONGODB_URI;

  if (uri) {
    try {
      await connect(uri);
      return;
    } catch (err) {
      console.warn("[db] failed to connect to MONGODB_URI:", err);
      if (process.env.NODE_ENV === "production") {
        throw err;
      }
    }
  }

  console.warn("[db] starting in-memory MongoDB for development.");
  memoryServer = await MongoMemoryServer.create();
  await connect(memoryServer.getUri());
}
