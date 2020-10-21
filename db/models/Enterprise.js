const mongoose = require("mongoose");

const EnterpriseSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  stores: {
    type: [mongoose.Schema.ObjectId],
    ref: "Stores",
  },
});

module.exports = mongoose.model("Enterprises", EnterpriseSchema);
