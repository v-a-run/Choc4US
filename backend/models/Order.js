import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  chocolates: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Chocolate", required: true },
  ],
  type: { type: String, default: "Pickup" },
  totalAmount: { type: Number, required: true },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
