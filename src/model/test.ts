import mongoose, { Document } from "mongoose";

export interface TEST_DOC extends Document {
    name: string,
    age: number
}
const TEST_SCHEMA = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    time: { type: Date, default: Date.now }
})

export const TEST_MODEL = mongoose.model('text_model', TEST_SCHEMA)