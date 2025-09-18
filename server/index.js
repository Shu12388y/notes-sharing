import express from "express";
import { connectDB } from "./utils/db.js";
import { resourceRouter } from "./routes/resource-route.js";

const app = express();



app.use(express.json())

app.use(resourceRouter);


app.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: "Home route working" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

connectDB()
  .then(() => {
    console.log("database connect");
  })
  .catch((e) => {
    console.log("failed to connect");
  });

// export default app;

app.listen(3000, () => {
  console.log("server is listing");
});
