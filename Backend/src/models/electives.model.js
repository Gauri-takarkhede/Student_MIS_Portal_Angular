import mongoose from "mongoose";

const electiveSchema = new mongoose.Schema(
  {
    moduleName: { type: String, required: true },
    subjects: [{ type: String, required: true }],
    maxLimits: { type: Map, of: Number, required: true },
    createdBy: { type: String, required: true },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Elective", electiveSchema);
