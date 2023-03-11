import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        unique: true,
    },
    avatar: {
        type: String,
        require: true,
    },
    backgorund: {
        type: String,
        require: true,
    },
});

const User = mongoose.model("User", UserSchema);

export default User;
