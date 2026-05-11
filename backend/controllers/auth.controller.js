import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "user already exists",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashedPass,
    });

    return res.status(201).json({
      message: "user created sucessfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to register user",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "all fields are required",
        error: error.message,
      });
    }

    const existingUser = await User.findOne({
      email,
    });

    if (!existingUser) {
      return res.status(400).json({
        message: "user does not exist",
      });
    }

    const checkPass = await bcrypt.compare(password, existingUser.password);

    if (!checkPass) {
      return res.status(400).json({
        message: "incorrect password",
      });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "login sucessfully",
      token,
      user: {
        id: existingUser._id,
        email: existingUser.email,
        name: existingUser.name,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "failed to login",
      error: error.message,
    });
  }
};

export const userProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }
    return res.status(200).json({
      message: "profile found successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to get user profile",
      error: error.message,
    });
  }
};

export const userLogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
    });

    return res.status(200).json({
      message: "logout successful",
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to logout",
      error: error.message,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    return res.status(200).json({
      user,
      message: "fetched user profile",
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to get user profile",
    });
  }
};
