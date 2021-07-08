"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router_1 = __importDefault(require("./address/router/router"));
exports.default = () => {
    const app = express_1.Router();
    app.use('/address', router_1.default);
    //TODO: add routes here...
    return app;
};
//# sourceMappingURL=index.js.map