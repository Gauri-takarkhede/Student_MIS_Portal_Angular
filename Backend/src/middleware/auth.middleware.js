import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
// import Faculty from "../models/faculty.model.js";

export const auth = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // if (decoded.role === "student") {
    req.user = await User.findById(decoded.id).select("-password");
    // } else if (decoded.role === "faculty") {
    //   req.user = await Faculty.findById(decoded.id).select("-password");
    //   // console.log(req.user);
    // }

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
