import express from "express";
import User from "../models/User";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, mobile } = req.body;
  try {
    const newUser = new User({ firstName, lastName, email, password, mobile });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error registering new user", error });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

module.exports = router;
