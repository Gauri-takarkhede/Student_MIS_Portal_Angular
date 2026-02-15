import express from "express";
import { createStudentDetails } from "../controllers/studentDetails.controller.js";
import { getAllStudents } from "../controllers/student.controller.js";
import { createFacultyDetails } from "../controllers/facultyDetails.controller.js";

const router = express.Router();

router.post("/addStudentDetails", createStudentDetails);
router.post("/addFacultyDetails", createFacultyDetails);

export default router;
