import userSchema from "../models/user.model.js";

export const createFaculty = async (req, res) => {
  const faculty = new userSchema(req.body);
  await faculty.save();
  res.status(201).json(faculty);
};
