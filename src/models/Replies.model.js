import { Schema, model } from 'mongoose';

const replySchema = new Schema({
    image_file: { type: Buffer },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    board: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
    content: { type: String },
    replying_to_post: { type: Schema.Types.ObjectId, ref: 'Post' },
    replying_to_reply: { type: Schema.Types.ObjectId, ref: 'Reply' }
}, { timestamps: true });

export const Reply = model('Reply', replySchema);