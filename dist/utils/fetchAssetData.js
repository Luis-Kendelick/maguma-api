"use strict";
// import { fetch } from "./nodeFetch";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAssetData = void 0;
const fetchAssetData = (cpf) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://api_externa.com/data?cpf=${cpf}`);
    if (!response.ok) {
        throw new Error("Failed to fetch asset data");
    }
    return yield response.json();
});
exports.fetchAssetData = fetchAssetData;
//# sourceMappingURL=fetchAssetData.js.map