import express from "express";

export const router = express.Router();

router.get("/health", async (req, res) => {
  try {
    res.status(200).json({ message: "Healthy" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
