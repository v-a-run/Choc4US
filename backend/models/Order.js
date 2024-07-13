import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderNo: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  chocolates: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Chocolate", required: true },
  ],
  orderType: { type: String, default: "Pickup" },
  totalAmount: { type: Number, required: true },
  orderStatus: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
