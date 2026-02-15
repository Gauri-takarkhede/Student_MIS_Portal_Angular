import FacultyDetails from "../models//facultyDetails.model.js";
import User from "../models/user.model.js";

export const createFacultyDetails = async (req, res) => {
  try {
    const {
      mis,
      course,
      dateOfJoining,
      address,
      city,
      state,
      selectedBloodGroup,
      category,
      religion,
      dateOfBirth,
      gender,
      specialization,
      designation,
    } = req.body.data;

    const faculty = new FacultyDetails({
      course,
      Date_of_Joining: dateOfJoining,
      address,
      city,
      state,
      blood_group: selectedBloodGroup,
      category,
      Religion: religion,
      Date_of_Birth: dateOfBirth,
      gender: gender,
      specialization,
      designation,
    });

    await faculty.save();
    const user = await User.findOne({ mis });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    console.log(user, "User");
    user.facultyDetailsId = faculty._id;
    await user.save();

    res.status(201).json({
      success: true,
      message: "Faculty details saved successfully",
      data: faculty,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving faculty details",
      error: error.message,
    });
  }
};
