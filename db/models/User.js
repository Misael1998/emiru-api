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
  role: {
    type: [String],
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Users", UserSchema);
