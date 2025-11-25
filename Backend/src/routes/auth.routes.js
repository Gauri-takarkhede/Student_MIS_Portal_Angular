import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

// Student or Faculty Signup
router.post("/student/register", registerUser);

// Login
router.post("/student/login", loginUser);

export default router;
