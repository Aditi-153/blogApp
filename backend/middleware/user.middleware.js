import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const userProtect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        message: "please log in first",
      });
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!verifyToken) {
      return res.status(400).json({
        message: "invalid token",
      });
    }

    const user = await User.findById(verifyToken.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "not auiithorized",
    });
  }
};
