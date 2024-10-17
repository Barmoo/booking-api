import { Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true }

}, {
    timestamps: true
});

userSchema.plugin(toJSON);
export const UserModel = model('User', userSchema);