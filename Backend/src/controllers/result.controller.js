import Result from "../models/result.model.js";

export const addResult = async (req, res) => {
  try {
    const { student, semester, subjects, cgpa, status } = req.body;

    const newResult = await Result.create({
      student,
      semester,
      subjects,
      cgpa,
      status,
    });

    res.status(201).json({ message: "Result added", result: newResult });
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

export const getMyResults = async (req, res) => {
  try {
    const results = await Result.find({ student: req.user._id });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
