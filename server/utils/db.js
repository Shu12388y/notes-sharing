import mongoose from "mongoose";
import { env } from "../config/env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(env.DBURI);
  } catch (error) {
    console.error(error);
  }
};
