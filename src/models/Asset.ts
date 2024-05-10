import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  cpf: String,
  data: Object,
  lastUpdated: { type: Date, default: Date.now },
});

export const Asset = mongoose.model("Asset", assetSchema);
