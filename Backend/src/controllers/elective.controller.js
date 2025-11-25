import Elective from "../models/electives.js";
import Preference from "../models/studentPreference.js";
import Allocation from "../models/allocation.model..js";

/** 1️⃣ Create new elective module  **/
export const createElective = async (req, res) => {
  try {
    const { moduleName, subjects, maxLimits } = req.body;

    const newElective = new Elective({
      moduleName,
      subjects,
      maxLimits,
      createdBy: req.user.id, // faculty ID from token
    });

    await newElective.save();
    res
      .status(201)
      .json({ message: "Elective module created", elective: newElective });
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

    const newPref = await Preference.findOneAndUpdate(
      { studentId: req.user.id, moduleId },
      { preferences },
      { upsert: true, new: true }
    );

    res.json({ message: "Preferences submitted", newPref });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/** 4️⃣ Faculty allocates electives **/
export const allocateElectives = async (req, res) => {
  try {
    const { moduleId } = req.params;

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
