import mongoose from "mongoose";

const electiveSchema = new mongoose.Schema(
  {
    moduleName: { type: String, required: true },
    subjects: [{ type: String, required: true }],
    maxLimits: { type: Map, of: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // faculty
  },
  { timestamps: true }
);

export default mongoose.model("Elective", electiveSchema);
