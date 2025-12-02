import Faculty from "../models/faculty.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createFaculty = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await Faculty.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hash = await bcrypt.hash(password, 10);

    const user = await Faculty.create({
      name,
      email,
      password: hash,
    });

    return res.status(201).json({ message: "Faculty registered successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const loginFaculty = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if faculty exists
    const faculty = await Faculty.findOne({ email });
    if (!faculty) {
      return res.status(400).json({ message: "Faculty not found" });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, faculty.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    // 3. Generate JWT Token
    const token = jwt.sign(
      { id: faculty._id, role: "faculty" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Faculty login successful",
      token,
      faculty: {
        id: faculty._id,
        name: faculty.name,
        email: faculty.email,
      },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};
