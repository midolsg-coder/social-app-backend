const express = require("express");
const router = express.Router();

const { register, login, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// ================= REGISTER =================
router.post("/register", register);

// ================= LOGIN =================
router.post("/login", login);

// ================= PROFILE (protected) =================
router.get("/profile", authMiddleware, getProfile);

module.exports = router;