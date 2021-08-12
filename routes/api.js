const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/user");

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
    if (emailExit) return res.status(400).send("Email already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    let userData = {
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
    };

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
            res.json(user);
        }
    });
});

module.exports = router;