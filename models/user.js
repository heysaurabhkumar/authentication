const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    username: String,
    password: String,
    isSocial: Boolean,
});

module.exports = mongoose.model("user", userSchema, "users");