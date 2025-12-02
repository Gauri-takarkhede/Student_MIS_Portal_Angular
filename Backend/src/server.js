import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/student.routes.js";
import electiveRoutes from "./routes/elective.routes.js";
import authRoutes from "./routes/auth.routes.js";
import resultRoutes from "./routes/result.routes.js";
import feedbackRoutes from "./routes/feedback.routes.js";
import bonafideRoutes from "./routes/bonafide.routes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/electives", electiveRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/bonafide", bonafideRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
