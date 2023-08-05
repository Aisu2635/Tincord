import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    F_name: {
        type: String,
        required: true,
        min: 2,
        max: 30,
    },
    L_name: {
        type: String,
        required: true,
        min: 2,
        max: 30,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    picture_path: {
        type: String,
        required: false,
        min: 5,
        default: "",
    },
    friends: {
        type: Array,
        required: false,
        default: [],
    },
    location: String,
    occupation: String,
    bio: {
        type: String,
        max: 120,
        default : "Hello Noobs i am new here",
    },
    profile_views: Number,
    impressions: Number,

}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;