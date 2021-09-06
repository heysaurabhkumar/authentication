const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/user");
const Resume = require("../models/resume");

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Unauthorized request");
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token === "null") {
        return res.status(401).send("Unauthorized request");
    }

    let payload = jwt.verify(token, process.env.TOKEN_SECERET);
    if (!payload) {
        return res.status(401).send("Unauthorized request");
    }
    req.userId = payload.subject;
    next();
}

router.post("/register", async(req, res) => {
    const emailExit = await User.findOne({ email: req.body.email });
    if (emailExit) return res.status(400).send("Email already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    let userData = {
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        isSocial: req.body.isSocial,
    };
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            let payload = { subject: registeredUser._id };
            let token = jwt.sign(payload, process.env.TOKEN_SECERET);
            res.status(200).send({ token });
        }
    });
});

router.post("/edit", verifyToken, async(req, res) => {
    const emailExit = await User.findOne({ email: req.body.email });
    if (emailExit) {
        if (JSON.stringify(emailExit._id) !== JSON.stringify(req.userId)) {
            return res.status(400).send("Email already exists");
        }
    }
    let userData = {
        email: req.body.email,
        username: req.body.username,
    };

    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        userData["password"] = hashedPassword;
    }
    User.findOneAndUpdate({ _id: req.userId }, userData, (err, user) => {
        if (err) {
            res.status(401).send(err);
        } else {
            res.status(200).send({ message: "sucess" });
        }
    });
});

router.post("/login", (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, async(error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send("Invalid email");
            } else {
                const validPass = await bcrypt.compare(
                    userData.password,
                    user.password
                );
                if (!validPass) {
                    res.status(401).send("Invalid password");
                } else {
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, process.env.TOKEN_SECERET);
                    res.status(200).send({ token });
                }
            }
        }
    });
});

router.get("/profile", verifyToken, (req, res) => {
    User.findOne({ _id: req.userId }, (err, user) => {
        if (err) {
            console.log(err);
            res.status(401).send("error");
        } else {
            userResponse = {
                email: user.email,
                username: user.username,
                isSocial: user.isSocial,
            };
            res.json(userResponse);
        }
    });
});

router.post("/resume", verifyToken, async(req, res) => {
    let resumeData = {
        userid: req.userId,
        fullname: req.body.fullname,
        position: req.body.position,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address,
        skills: req.body.skills,
        profile: req.body.profile,
        linkedin: req.body.linkedin,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        languages: req.body.languages,
        objective: req.body.objective,
        experience: req.body.experience,
        project: req.body.project,
        certification: req.body.certification,
        education: req.body.education,
    };

    const resumeExit = await Resume.findOne({ userid: req.userId });
    if (resumeExit) {
        Resume.findOneAndUpdate({ userid: req.userId }, resumeData, (err, user) => {
            if (err) {
                res.status(401).send(err);
            } else {
                res.status(200).send({ message: "sucess" });
            }
        });
        return;
    }

    let resume = new Resume(resumeData);

    resume.save((error, savedResume) => {
        if (error) {
            res.status(401).send(err);
        } else {
            // console.log(savedResume);
            res.status(200).send({ message: "success" });
        }
    });
});

router.get("/template", verifyToken, (req, res) => {
    Resume.findOne({ userid: req.userId }, (err, template) => {
        if (err) {
            // console.error(err);
            res.status(400).send(err);
        } else {
            // console.log("template");
            // console.log(template);
            res.status(200).send(template);
        }
    });
});

module.exports = router;