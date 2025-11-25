import express from "express";
import {
  createElective,
  getAllElectives,
  submitPreferences,
  allocateElectives,
} from "../controllers/elective.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { facultyOnly } from "../middleware/faculty.middleware.js";
import { studentOnly } from "../middleware/student.middleware.js";

const router = express.Router();

// Faculty
router.post("/create", auth, facultyOnly, createElective);
router.post("/allocate/:moduleId", auth, facultyOnly, allocateElectives);

// Student
router.post("/submit-preferences", auth, studentOnly, submitPreferences);
router.get("/all", auth, getAllElectives);

export default router;
