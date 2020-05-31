import mongoose from "mongoose";

const TEST_SCHEMA = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    time: { type: Date, default: Date.now }
})

export const TEST_MODEL = mongoose.model('text_model', TEST_SCHEMA)