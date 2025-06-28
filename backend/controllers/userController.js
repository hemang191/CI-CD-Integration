const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { name, email, password, country } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required",
        status: "error",
      });
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    console.log("passwordHash is --------------", passwordHash);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
      country,
    });

    await newUser.save();

    return res.status(201).json({
      status: "success",
      message: "User created successfully",
    });
  } catch (error) {
    console.log("error is ------------", error);

    throw error;
  }
};

const findUserByEmail = async (req, res) => {
  try {
    console.log("req.params is --------------", req.params);
    const email = req.query.email;

    console.log("email is --------------", email);
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
        status: "error",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return rs.status(404).json({
        message: "User not found",
        status: "error",
      });
    }

    console.log("user is --------------", user);

    return res.status(200).json({
      status: "success",
      data: user,
      message: "User found successfully",
    });
  } catch (eror) {
    console.log("error is ------------", error);
    return res.status(500).json({
      message: "Internal server error",
      status: "error",
    });
  }
};
module.exports = { createUser, findUserByEmail };
