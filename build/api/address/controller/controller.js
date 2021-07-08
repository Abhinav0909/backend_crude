"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceValue = exports.deleteValue = exports.addValue = exports.getValue = void 0;
const database_1 = __importDefault(require("../../../loaders/database"));
const nanoid_1 = require("nanoid");
const getValue = async (query) => {
    const data = await (await database_1.default()).collection('address').findOne(query);
    return data;
};
exports.getValue = getValue;
const addValue = async (val) => {
    val.id = nanoid_1.nanoid();
    await (await database_1.default()).collection('address').insertOne(val);
    return val.id;
};
exports.addValue = addValue;
const deleteValue = async (val) => {
    await (await database_1.default()).collection('address').deleteOne(val);
};
exports.deleteValue = deleteValue;
const replaceValue = async (val) => {
    await (await database_1.default()).collection('address').replaceOne({ id: val.id }, val);
};
exports.replaceValue = replaceValue;
//# sourceMappingURL=controller.js.map