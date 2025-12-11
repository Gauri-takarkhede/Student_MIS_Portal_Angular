import express from "express";
import {
  addResult,
  updateResult,
  deleteResult,
  getAllResults,
  getStudentResults,
} from "../controllers/result.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { facultyOnly } from "../middleware/faculty.middleware.js";

const router = express.Router();

// Faculty only
router.post("/addResult", auth, addResult);
router.put("/update/:id", auth, facultyOnly, updateResult);
router.delete("/delete/:id", auth, facultyOnly, deleteResult);
router.get("/all", auth, facultyOnly, getAllResults);

// Student only
router.get("/:mis", auth, getStudentResults);

export default router;
