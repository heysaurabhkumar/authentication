const mongoose = require("../services/database");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    username: String,
    password: String,
});

module.exports = mongoose.model("user", userSchema, "users");