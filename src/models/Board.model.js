import { Schema, model } from 'mongoose';

const boardSchema = new Schema({
    abbr: { type: String, required: true, max: 10 },
    title: { type: String, required: true, max: 40 },
    description: { type: String, required: true, max: 400 },
    rules: [{ type: String, required: true }],
    founder: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    modmins: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    secret: { type: String, required: true },
}, { timestamps: true });

export const Board = model('Board', boardSchema);