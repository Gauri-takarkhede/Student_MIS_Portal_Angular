import express from "express";
import { createStudentDetails } from "../controllers/studentDetails.controller.js";
import { getAllStudents } from "../controllers/student.controller.js";

const router = express.Router();

router.post("/addStudentDetails", createStudentDetails);

export default router;
