import express from "express";
import {
  submitFeedback,
  getMyFeedbacks,
  getAllFeedbacks,
  respondToFeedback,
} from "../controllers/feedback.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { facultyOnly } from "../middleware/faculty.middleware.js";

const router = express.Router();

// Student routes
router.post("/submit", auth, submitFeedback);
router.get("/my", auth, getMyFeedbacks);

// Faculty routes
router.get("/all", auth, facultyOnly, getAllFeedbacks);
router.post("/respond/:id", auth, facultyOnly, respondToFeedback);

export default router;
