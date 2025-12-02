import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mis: { type: Number, required: true },
});

export default mongoose.model("Faculty", facultySchema);
