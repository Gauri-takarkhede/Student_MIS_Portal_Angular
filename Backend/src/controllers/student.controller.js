import userSchema from "../models/user.model.js";

export const getStudents = async (req, res) => {
  const students = await userSchema.find();
  res.json(students);
};

export const getStudentInfo = async (req, res) => {
  try {
    const { mis } = req.params;
    const student = await userSchema.findOne({ mis });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createStudent = async (req, res) => {
  const student = new userSchema(req.body);
  await student.save();
  res.status(201).json(student);
};

export const getAllStudents = async (req, res) => {
  const students = await userSchema.find();
  res.status(200).json(students);
};
