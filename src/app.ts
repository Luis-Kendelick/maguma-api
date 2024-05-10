import express from "express";
import { assetRouter } from "./routes/assetRouter.js";

const app = express();
app.use(express.json());

app.use("/assets", assetRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
