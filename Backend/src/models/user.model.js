import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["faculty", "student"],
      default: "student",
    },
    mis: { type: String },
    department: { type: String },
    studentDetailsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentDetails",
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
