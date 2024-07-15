const express = require("express");
const Order = require("../models/Order");

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
router.get("/:orderNo", async (req, res) => {
  const { orderNo } = req.params;
  try {
    const order = await Order.find({ orderNo: orderNo });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
});

module.exports = router;
