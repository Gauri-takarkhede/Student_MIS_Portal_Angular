import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";
import {
  loginFaculty,
  createFaculty,
} from "../controllers/faculty.controller.js";

const router = express.Router();

// Student or Faculty Signup
router.post("/student/register", registerUser);

// Login
router.post("/student/login", loginUser);

// Login Faculty
router.post("/faculty/login", loginFaculty);

// Register Faculty
router.post("/faculty/register", createFaculty);

export default router;
