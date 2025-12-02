import express from "express";
import {
  getStudents,
  createStudent,
  getStudentInfo,
} from "../controllers/student.controller.js";
import {
  submitPreferences,
  getPublishedElectives,
} from "../controllers/elective.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profiles", getStudents);
router.get("/profile/:mis", getStudentInfo);
router.post("/", createStudent);
router.get("/published", getPublishedElectives);
router.post("/submitElectives", auth, submitPreferences);

export default router;
