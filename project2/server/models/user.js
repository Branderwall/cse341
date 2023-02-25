const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    displayName: { type: String, required: [true, "Display Name required"] },
    firstName: { type: String, required: [true, "First name required"] },
    lastName: { type: String, required: [true, "Last name required"] },
    email: { type: String, required: [true, "Email required"] },
});

const User = model("User", userSchema, "users");

module.exports = {
    User,
};
