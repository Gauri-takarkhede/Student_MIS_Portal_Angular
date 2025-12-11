import express from "express";
import {
  getStudents,
  createStudent,
  getStudentInfo,
  getAllStudents,
} from "../controllers/student.controller.js";
import {
  submitPreferences,
  getNonPublishedElectives,
} from "../controllers/elective.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profiles", getStudents);
router.get("/profile/:mis", getStudentInfo);
router.post("/", createStudent);
router.get("/published", getNonPublishedElectives);
router.post("/submitElectives", auth, submitPreferences);
router.get("/getAllStudents", getAllStudents);

export default router;
