import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  marks: { type: Number, required: true },
});

const resultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    subjects: [subjectSchema],
    cgpa: { type: Number, required: true },
    status: { type: String, enum: ["Pass", "Fail"], required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Result", resultSchema);
