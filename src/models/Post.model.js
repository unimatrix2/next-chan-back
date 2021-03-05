import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    image_file: {  },
}, { timestamps: true });

export const Post = model('Post', postSchema);