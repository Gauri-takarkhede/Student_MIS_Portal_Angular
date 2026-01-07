import Elective from "../models/electives.model.js";
import Preference from "../models/studentPreference.js";
import Allocation from "../models/allocation.model..js";
import Result from "../models/result.model.js";

/**  Create new elective module  **/
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

export const getNonPublishedElectives = async (req, res) => {
  try {
    console.log("I am inside publish");
    const electives = await Elective.find({ isPublished: false });
    res.json(electives);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**  Get all elective modules **/
export const getAllElectives = async (req, res) => {
  try {
    const electives = await Elective.find();
    res.json(electives);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**  Student submits preferences **/
export const submitPreferences = async (req, res) => {
  try {
    const { moduleId, preferences } = req.body;
    const studentId = req.user.id;

    //  Check if record already exists
    const existing = await Preference.findOne({ studentId, moduleId });

    const student = await Result.findOne({ studentId: studentId });
    const cgpa = student.cgpa;

    if (existing) {
      // Update existing record
      existing.preferences = preferences;
      existing.cgpa = cgpa;
      await existing.save();

      return res.json({
        message: "Preferences updated successfully",
        pref: existing,
      });
    }

    // Create new preference entry
    const newPref = await Preference.create({
      studentId,
      moduleId,
      preferences,
      cgpa,
    });

    res.json({
      message: "Preferences submitted successfully",
      pref: newPref,
    });
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

/** Faculty allocates electives **/
export const allocateElectives = async (req, res) => {
  try {
    const { moduleId } = req.params;
    console.log(moduleId, "moduleId");
    const elective = await Elective.findById(moduleId);
    const preferences = await Preference.find({ moduleId }).populate(
      "studentId"
    );

    // Sort students by CGPA (highest first)
    const sorted = preferences.sort((a, b) => b.cgpa - a.cgpa);

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

// export const allocateElectives = async (req, res) => {
//   try {
//     const { moduleId } = req.params;

//     const elective = await Elective.findById(moduleId);
//     if (!elective) {
//       return res.status(404).json({ message: "Elective not found" });
//     }

//     const preferences = await Preference.aggregate([
//       {
//         $match: {
//           moduleId: new mongoose.Types.ObjectId(moduleId),
//         },
//       },
//       {
//         $lookup: {
//           from: "users",
//           localField: "studentId",
//           foreignField: "_id",
//           as: "student",
//         },
//       },
//       { $unwind: "$student" },
//       {
//         $lookup: {
//           from: "results",
//           localField: "studentId",
//           foreignField: "studentId",
//           as: "result",
//         },
//       },
//       {
//         $addFields: {
//           cgpa: {
//             $ifNull: [{ $arrayElemAt: ["$result.cgpa", 0] }, 0],
//           },
//         },
//       },
//       {
//         $sort: { cgpa: -1 },
//       },
//     ]);

//     if (preferences.length === 0) {
//       return res
//         .status(400)
//         .json({ message: "No preferences found for this module" });
//     }

//     // ✅ FIXED MAP INITIALIZATION
//     let capacity = new Map(Object.entries(elective.maxLimits));
//     let allocations = [];

//     for (let pref of preferences) {
//       let allocated = null;

//       for (let choice of pref.preferences) {
//         if (capacity.get(choice) > 0) {
//           allocated = choice;
//           capacity.set(choice, capacity.get(choice) - 1);
//           break;
//         }
//       }

//       allocations.push({
//         studentId: pref.studentId,
//         moduleId,
//         allocatedSubject: allocated || "Not Allocated",
//       });
//     }

//     await Allocation.deleteMany({ moduleId });
//     await Allocation.insertMany(allocations);

//     res.json({ message: "Allocation completed", allocations });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// };

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
