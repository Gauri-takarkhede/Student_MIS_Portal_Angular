import mongoose from "mongoose";

const facultyDetailsSchema = new mongoose.Schema(
  {
    course: { type: String },
    Date_of_Joining: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    blood_group: { type: String },
    category: { type: String },
    Religion: { type: String },
    Date_of_Birth: { type: String },
    gender: { type: String },
    specialization: { type: String },
    designation: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model("FacultyDetails", facultyDetailsSchema);
