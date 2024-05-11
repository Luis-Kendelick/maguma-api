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
exports.assetRouter = void 0;
const express_1 = require("express");
exports.assetRouter = (0, express_1.Router)();
exports.assetRouter.get("/:cpf", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const asset = await getAssetByCpf(req.params.cpf);
        res.json({
            cpf: "asset.cpf",
            data: "asset.data",
        });
    }
    catch (error) {
        res.status(404).json({ message: "Asset not found" });
    }
}));
//# sourceMappingURL=assetRouter.js.map