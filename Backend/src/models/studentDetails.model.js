import mongoose from "mongoose";

const studentDetailsSchema = new mongoose.Schema(
  {
    course: { type: String },
    Date_of_Admission: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    blood_group: { type: String },
    category: { type: String },
    Religion: { type: String },
    Date_of_Birth: { type: String },
    gender: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model("StudentDetails", studentDetailsSchema);
