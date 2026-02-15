import User from "../models/user.model.js";

// Upload / Update Profile Photo
export const uploadProfilePhoto = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log("Hii", userId);
    console.log(req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { profileImage: req.file.path },
      { new: true },
    );

    res.status(200).json({
      message: "Profile photo uploaded successfully",
      profileImage: user.profileImage,
    });
  } catch (error) {
    res.status(500).json({ message: "Upload failed" });
  }
};

// Remove Profile Photo
export const removeProfilePhoto = async (req, res) => {
  try {
    const userId = req.user._id;

    await User.findByIdAndUpdate(userId, {
      profileImage: "",
    });

    res.status(200).json({
      message: "Profile photo removed successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Remove failed" });
  }
};
