import express from "express";
import Chocolate from "../models/Chocolate";

const router = express.Router();

// Add chocolate
router.post("/", async (req, res) => {
  const { name, description, price, image } = req.body;

  try {
    const newChocolate = new Chocolate({ name, description, price, image });
    await newChocolate.save();
    res.status(201).json(newChocolate);
  } catch (error) {
    res.status(500).json({ message: "Error adding chocolate", error });
  }
});

// Get chocolates
router.get("/", async (req, res) => {
  try {
    const chocolates = await Chocolate.find();
    res.status(200).json(chocolates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching chocolates", error });
  }
});

module.exports = router;
