import { fetchAssetData } from "../utils/fetchAssetData.js";
import { Asset } from "../models/Asset";

export const getAssetByCpf = async (cpf: string) => {
  // Check cache first
  let asset = await Asset.findOne({ cpf: cpf });
  if (!asset) {
    const data = await fetchAssetData(cpf);
    asset = new Asset({ cpf, data });
    await asset.save();
  }
  return asset;
};
