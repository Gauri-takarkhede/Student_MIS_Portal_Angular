import express from "express";
import {
  addResult,
  updateResult,
  deleteResult,
  getAllResults,
  getMyResults,
} from "../controllers/result.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { facultyOnly } from "../middleware/faculty.middleware.js";

const router = express.Router();

// Faculty only
router.post("/add", auth, facultyOnly, addResult);
router.put("/update/:id", auth, facultyOnly, updateResult);
router.delete("/delete/:id", auth, facultyOnly, deleteResult);
router.get("/all", auth, facultyOnly, getAllResults);

// Student only
router.get("/my", auth, getMyResults);

export default router;
