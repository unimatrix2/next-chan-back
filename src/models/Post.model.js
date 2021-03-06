import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    image_file: {  },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    board: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
    content: { type: String }
}, { timestamps: true });

export const Post = model('Post', postSchema);