"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const assetRouter_1 = require("./routes/assetRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/assets", assetRouter_1.assetRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map