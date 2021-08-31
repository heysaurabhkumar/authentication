const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    userid: String,
    fullname: String,
    position: String,
    email: String,
    mobile: String,
    address: String,
    skills: String,
    profile: String,
    linkedin: String,
    facebook: String,
    instagram: String,
    languages: String,
    objective: String,
    experience: String,
    project: String,
    certification: String,
    education: String,
});

module.exports = mongoose.model("resume", resumeSchema, "resumes");