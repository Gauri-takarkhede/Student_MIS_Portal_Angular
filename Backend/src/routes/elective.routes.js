import express from "express";
import {
  createElective,
  getAllElectives,
  submitPreferences,
  allocateElectives,
  publishElective,
  getAllPreferences,
  getAllocations,
} from "../controllers/elective.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { facultyOnly } from "../middleware/faculty.middleware.js";

const router = express.Router();

// Faculty
router.post("/create", createElective);
router.put("/publish/:id", publishElective);
router.post("/allocate/:moduleId", auth, allocateElectives);

// Student
// router.post("/submit-preferences", auth, studentOnly, submitPreferences);
router.get("/", getAllElectives);
router.get("/getAllPreferences", getAllPreferences);
router.get("/allocations/:moduleId", getAllocations);

export default router;
