import mongoose from "mongoose";

const preferenceSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    moduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Elective" },
    preferences: [{ type: String }],
    cgpa: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("Preference", preferenceSchema);
