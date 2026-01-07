import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  academicYear: {
    type: String,
    required: true,
  },
  subjects: [
    {
      name: { type: String, required: true },
      cgpaGot: { type: Number, required: true },
      passingCgpa: { type: Number, default: 10 },
    },
  ],
  cgpa: { type: Number, required: true },
  status: { type: String, enum: ["Pass", "Fail"], required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Result", resultSchema);
