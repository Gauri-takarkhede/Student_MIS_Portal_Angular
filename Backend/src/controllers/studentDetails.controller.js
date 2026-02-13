import StudentDetails from "../models/studentDetails.model.js";
import User from "../models/user.model.js";

export const createStudentDetails = async (req, res) => {
  try {
    const {
      mis,
      course,
      dateOfAdmission,
      address,
      city,
      state,
      selectedBloodGroup,
      category,
      religion,
      dateOfBirth,
      gender,
    } = req.body.data;

    const student = new StudentDetails({
      course,
      Date_of_Admission: dateOfAdmission,
      address,
      city,
      state,
      blood_group: selectedBloodGroup,
      category,
      Religion: religion,
      Date_of_Birth: dateOfBirth,
      gender: gender,
    });

    await student.save();
    const user = await User.findOne({ mis });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.studentDetailsId = student._id;
    await user.save();

    res.status(201).json({
      success: true,
      message: "Student details saved successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving student details",
      error: error.message,
    });
  }
};
