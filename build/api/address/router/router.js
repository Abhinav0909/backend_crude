"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller/controller");
const joi_1 = __importDefault(require("joi"));
const addressRouter = express_1.Router();
//get request
addressRouter.get('/', (req, res) => {
    try {
        const schema = joi_1.default.object({
            id: joi_1.default.string().required(),
        });
        const { value, error } = schema.validate(req.query);
        if (error) {
            throw {
                status: 422,
                message: 'Validation error'
            };
        }
        else {
            controller_1.getValue(value).then((data) => {
                res.status(200).json({
                    message: 'Value get',
                    data: data
                });
            });
        }
    }
    catch (error) {
        res.status(error.message || 500).json({
            message: error.message || 'Error in server'
        });
    }
});
//post request
addressRouter.post('/add', (req, res) => {
    try {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            address: joi_1.default.string().required(),
            phoneNumber: joi_1.default.number().required()
        });
        const { value, error } = schema.validate(req.body);
        if (error) {
            throw {
                status: 422,
                message: error.message
            };
        }
        else {
            controller_1.addValue(value).then((id) => {
                res.status(201).json({
                    message: 'Value Added',
                    id: id
                });
            });
        }
    }
    catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Error in Server'
        });
    }
});
//delete request
addressRouter.delete('/delete', (req, res) => {
    try {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            address: joi_1.default.string().required()
        });
        const { value, error } = schema.validate(req.body);
        if (error) {
            throw {
                status: 422,
                message: 'Validation error'
            };
        }
        else {
            controller_1.deleteValue(value).then(() => {
                res.status(201).json({
                    message: 'Value deleted'
                });
            });
        }
    }
    catch (err) {
        res.status(err.status || 500).json({
            message: 'Error in server'
        });
    }
});
//put request
addressRouter.put('/put', (req, res) => {
    try {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            address: joi_1.default.string().required(),
            phoneNumber: joi_1.default.number().required(),
            id: joi_1.default.string().required()
        });
        const { value, error } = schema.validate(req.body);
        if (error) {
            throw {
                status: 422,
                message: 'Validation error'
            };
        }
        else {
            controller_1.replaceValue(value).then(() => {
                res.status(201).json({
                    message: 'Value replaced'
                });
            });
        }
    }
    catch (err) {
        res.status(err.status || 500).json({
            message: 'Error in server'
        });
    }
});
exports.default = addressRouter;
//# sourceMappingURL=router.js.map