import Elective from "../models/electives.model.js";
import Preference from "../models/studentPreference.js";
import Allocation from "../models/allocation.model..js";

/** 1️⃣ Create new elective module  **/
export const createElective = async (req, res) => {
  try {
    console.log("Incoming Body:", req.body);
    console.log(req.user);

    const { moduleName, subjects, maxLimits } = req.body;

    // Validate
    if (!moduleName || !subjects || !maxLimits) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Convert maxLimits to a Map explicitly
    const limitsMap = new Map(Object.entries(maxLimits));

    const newElective = new Elective({
      moduleName,
      subjects,
      maxLimits: limitsMap, // <-- IMPORTANT FIX
      createdBy: req.user?.id || null, // <-- Avoid crash
    });

    console.log("New Elective Object:", newElective);

    await newElective.save();

    res.status(201).json({
      message: "Elective module created",
      elective: newElective,
    });
  } catch (err) {
    console.error("Create Elective Error:", err);
    res.status(500).json({ message: err.message });
  }
};

export const publishElective = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const elective = await Elective.findByIdAndUpdate(
      req.params.id,
      { isPublished: true },
      { new: true }
    );

    res.json({ message: "Module published", elective });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPublishedElectives = async (req, res) => {
  try {
    const electives = await Elective.find({ isPublished: true });
    res.json(electives);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/** 2️⃣ Get all elective modules **/
export const getAllElectives = async (req, res) => {
  try {
    const electives = await Elective.find();
    res.json(electives);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/** 3️⃣ Student submits preferences **/
export const submitPreferences = async (req, res) => {
  try {
    const { moduleId, preferences } = req.body;

    const newPref = await Preference.create({
      studentId: req.user.id,
      moduleId,
      preferences,
    });

    res.json({ message: "Preferences submitted", newPref });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllPreferences = async (req, res) => {
  try {
    const preferences = await Preference.find()
      .populate("studentId", "name mis email")
      .populate("moduleId", "moduleName");

    res.json(preferences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/** 4️⃣ Faculty allocates electives **/
export const allocateElectives = async (req, res) => {
  try {
    const { moduleId } = req.params;
    console.log(moduleId, "moduleId");
    const elective = await Elective.findById(moduleId);
    const preferences = await Preference.find({ moduleId }).populate(
      "studentId"
    );

    // Sort students by CGPA (highest first)
    const sorted = preferences.sort(
      (a, b) => b.studentId.cgpa - a.studentId.cgpa
    );

    let capacity = new Map(elective.maxLimits);
    let allocations = [];

    for (let pref of sorted) {
      let allocated = null;

      for (let choice of pref.preferences) {
        if (capacity.get(choice) > 0) {
          allocated = choice;
          capacity.set(choice, capacity.get(choice) - 1);
          break;
        }
      }

      allocations.push({
        studentId: pref.studentId._id,
        moduleId,
        allocatedSubject: allocated || "Not Allocated",
      });
    }

    // Save all allocations
    await Allocation.deleteMany({ moduleId });
    await Allocation.insertMany(allocations);

    res.json({ message: "Allocation completed", allocations });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllocations = async (req, res) => {
  try {
    const { moduleId } = req.params;
    console.log(moduleId);

    const allocations = await Allocation.find({ moduleId }).populate(
      "studentId"
    );
    console.log(allocations);

    res.json(allocations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
