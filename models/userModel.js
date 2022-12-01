import {Schema, model} from "mongoose";

const userShema =  Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    hashPassword: {
        type: String,
        required: true,
    },
    token: String
});

export default model('User', userShema);