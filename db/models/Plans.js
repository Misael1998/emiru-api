const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stores: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Plans", PlanSchema);
