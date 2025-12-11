import Result from "../models/result.model.js";
import User from "../models/user.model.js";

export const addResult = async (req, res) => {
  try {
    const { studentId, semester, academicYear, subjects, cgpa, status } =
      req.body;

    console.log(req.body);

    if (!studentId || !subjects?.length)
      return res.status(400).json({ error: "Missing fields" });

    const result = new Result({
      studentId,
      semester,
      academicYear,
      subjects,
      cgpa,
      status,
    });

    await result.save();

    res.status(201).json({
      message: "Result added successfully",
      result,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateResult = async (req, res) => {
  try {
    const resultId = req.params.id;

    const result = await Result.findByIdAndUpdate(resultId, req.body, {
      new: true,
    });

    if (!result) return res.status(404).json({ message: "Result not found" });

    res.json({ message: "Result updated", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteResult = async (req, res) => {
  try {
    const resultId = req.params.id;

    const result = await Result.findByIdAndDelete(resultId);

    if (!result) return res.status(404).json({ message: "Result not found" });

    res.json({ message: "Result deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllResults = async (req, res) => {
  try {
    const results = await Result.find().populate("student", "name email");

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getStudentResults = async (req, res) => {
  try {
    const studentMis = req.user.mis;
    const student = await User.findOne({ mis: studentMis });
    const results = await Result.find({ studentId: student._id });

    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyResults = async (req, res) => {
  try {
    const results = await Result.find({ student: req.user._id });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
