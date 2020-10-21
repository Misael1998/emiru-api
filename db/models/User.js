const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  roles: {
    type: [String],
    required: true,
    trim: true,
  },
  payment: {
    type: mongoose.Schema.ObjectId,
    ref: "Payments",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  enterprise: {
    type: mongoose.Schema.ObjectId,
    ref: "Enterprises",
  },
});

module.exports = mongoose.model("Users", UserSchema);
