import mongoose from "mongoose";

const postShema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true,
    },
    image_url: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    },
    // user: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
});

export default mongoose.model('Post', postShema);