const mongoose = require("mongoose");

const ChocolateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
});

module.exports = mongoose.model("Chocolate", ChocolateSchema);
