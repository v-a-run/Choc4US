import express from "express";
import Order from "../models/Order";

const router = express.Router();

// Create order
router.post("/", async (req, res) => {
  const { user, chocolates, orderType, totalAmount, orderStatus } = req.body;
  const orders = await Order.find({}); // returns array of orders
  const orderNo = orders.length() + 1;
  try {
    const newOrder = new Order({
      orderNo,
      user,
      chocolates,
      orderType,
      totalAmount,
      orderStatus,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
});

// Get order by orderNo
router.get("/", async (req, res) => {
  const { orderNo } = req.body;
  try {
    const order = await Order.find({ orderNo: orderNo });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error });
  }
});

// Get all orders

module.exports = router;
