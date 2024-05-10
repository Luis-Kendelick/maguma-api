// import { fetch } from "./nodeFetch";

export const fetchAssetData = async (cpf: string): Promise<any> => {
  const response = await fetch(`https://api_externa.com/data?cpf=${cpf}`);
  if (!response.ok) {
    throw new Error("Failed to fetch asset data");
  }
  return await response.json();
};
