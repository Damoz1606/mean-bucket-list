import { Schema, model } from 'mongoose';

const bucket_schema = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default model("Bucket", bucket_schema);