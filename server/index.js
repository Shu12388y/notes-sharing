import express from "express";
import { router } from "./routes/route.js";

const app = express();

app.use(router);
app.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: "Home route working" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});



export default app;
