import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        F_name: {
            type: String,
            required: true,
        },
        L_name: {
            type: String,
            required: true,
        },
        location: String,
        desc: String,
        picture_path: String,
        userPicture_path: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: [],
        }
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;