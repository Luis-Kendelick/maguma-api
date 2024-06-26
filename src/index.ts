import express from "express";
import { assetRouter } from "./routes/assetRouter";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use("/assets", assetRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on portttttt ${PORT}`);
});
