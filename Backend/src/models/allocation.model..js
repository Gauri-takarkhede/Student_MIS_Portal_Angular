import mongoose from "mongoose";

const allocationSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Elective" },
  allocatedSubject: { type: String },
});

export default mongoose.model("Allocation", allocationSchema);
