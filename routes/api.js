const express = require("express");
const router = express.Router();

const {
    login,
    register,
    google,
    forgot,
    reset,
} = require("../controllers/auth");
const { verifyToken } = require("../controllers/verifyToken");
const { profile, edit } = require("../controllers/users");
const { resume, template } = require("../controllers/resume");

//Authentication Routes
router.post("/login", login);
router.post("/register", register);
router.post("/google", google);
router.post("/forgot-password", forgot);
router.post("/reset-password", reset);

//User Routes
router.get("/profile", verifyToken, profile);
router.post("/edit", verifyToken, edit);

//Resume Routes
router.post("/resume", verifyToken, resume);
router.get("/template", verifyToken, template);

module.exports = router;