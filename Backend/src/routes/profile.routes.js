import express from "express";
import upload from "../middleware/upload.js";
import {
  uploadProfilePhoto,
  removeProfilePhoto,
} from "../controllers/profile.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.put("/upload", auth, upload.single("photo"), uploadProfilePhoto);

router.put("/remove", auth, removeProfilePhoto);

export default router;
