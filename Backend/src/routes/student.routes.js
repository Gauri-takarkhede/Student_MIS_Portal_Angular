import express from "express";
import {
  getStudents,
  createStudent,
  getStudentInfo,
} from "../controllers/student.controller.js";

const router = express.Router();

router.get("/profiles", getStudents);
router.get("/profile/:mis", getStudentInfo);
router.post("/", createStudent);
router.post("/submitElectives");

export default router;
