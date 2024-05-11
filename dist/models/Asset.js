"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const assetSchema = new mongoose_1.default.Schema({
    cpf: String,
    data: Object,
    lastUpdated: { type: Date, default: Date.now },
});
exports.Asset = mongoose_1.default.model("Asset", assetSchema);
//# sourceMappingURL=Asset.js.map