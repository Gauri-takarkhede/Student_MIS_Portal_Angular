import express from "express";
import {
  createBonafideRequest,
  getMyBonafideRequests,
  getAllBonafideRequests,
  approveBonafide,
  rejectBonafide,
  downloadBonafide,
} from "../controllers/bonafide.controller.js";
import { auth } from "../middleware/auth.middleware.js";
import { facultyOnly } from "../middleware/faculty.middleware.js";

const router = express.Router();

// Student
router.post("/request", auth, createBonafideRequest);
router.get("/my-requests", auth, getMyBonafideRequests);

// Faculty
router.get("/all", getAllBonafideRequests);
router.patch("/approve/:id", auth, approveBonafide);
router.patch("/reject/:id", auth, rejectBonafide);

// Download
router.get("/download/:id", downloadBonafide);

export default router;
