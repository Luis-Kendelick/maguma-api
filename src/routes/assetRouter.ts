import { Router } from "express";
import { getAssetByCpf } from "../services/assetService";

export const assetRouter = Router();

assetRouter.get("/:cpf", async (req, res) => {
  try {
    // const asset = await getAssetByCpf(req.params.cpf);
    res.json({
      cpf: "asset.cpf",
      data: "asset.data",
    });
  } catch (error) {
    res.status(404).json({ message: "Asset not found" });
  }
});
