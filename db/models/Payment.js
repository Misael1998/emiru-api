const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  creditCardName: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  cardExpire: {
    type: Date,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Payments", PaymentSchema);
