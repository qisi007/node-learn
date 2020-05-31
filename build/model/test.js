"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_MODEL = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TEST_SCHEMA = new mongoose_1.default.Schema({
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    time: { type: Date, default: Date.now }
});
exports.TEST_MODEL = mongoose_1.default.model('text_model', TEST_SCHEMA);
