import Feedback from "../models/feedback.model.js";

export const submitFeedback = async (req, res) => {
  try {
    const { message } = req.body;

    const fb = await Feedback.create({
      student: req.user._id,
      message,
    });

    res.status(201).json({ message: "Feedback submitted", feedback: fb });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ student: req.user._id });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("student", "name email");
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const respondToFeedback = async (req, res) => {
  try {
    const { response } = req.body;
    const { id } = req.params;

    const fb = await Feedback.findById(id);
    if (!fb) return res.status(404).json({ message: "Feedback not found" });

    fb.facultyResponse = response;
    fb.status = "Resolved";

    await fb.save();

    res.json({ message: "Response submitted", feedback: fb });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
