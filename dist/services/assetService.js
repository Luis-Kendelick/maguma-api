"use strict";
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
exports.getAssetByCpf = void 0;
const fetchAssetData_js_1 = require("../utils/fetchAssetData.js");
const Asset_1 = require("../models/Asset");
const getAssetByCpf = (cpf) => __awaiter(void 0, void 0, void 0, function* () {
    // Check cache first
    let asset = yield Asset_1.Asset.findOne({ cpf: cpf });
    if (!asset) {
        const data = yield (0, fetchAssetData_js_1.fetchAssetData)(cpf);
        asset = new Asset_1.Asset({ cpf, data });
        yield asset.save();
    }
    return asset;
});
exports.getAssetByCpf = getAssetByCpf;
//# sourceMappingURL=assetService.js.map