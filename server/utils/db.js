import mongoose from "mongoose";
import { env } from "../config/env.js";

export const connectDB = async () => {
  try {
    let cached = global.mongoose;
    if (!cached) {
      cached = global.mongoose = { conn: null, promise: null };
    }
    if (cached.conn) {
      return cached.conn;
    }
    if (!cached.promise) {
      cached.promise = await mongoose.connect(env.DBURI);
    }

    cached.conn = await cached.promise;

    return cached.conn;
  } catch (error) {
    console.error(error);
  }
};
