const mongoose = require("mongoose");

const EnterpriseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
  },
  name: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    required: true,
    default: "free",
  },
  stores: {
    type: [mongoose.Schema.ObjectId],
    ref: "Stores",
  },
});

module.exports = mongoose.model("Enterprises", EnterpriseSchema);
