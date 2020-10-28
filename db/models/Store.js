const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  user: {
    type: [mongoose.Schema.ObjectId],
    ref: "Users",
  },
  isBlocked: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Stores", StoreSchema);
