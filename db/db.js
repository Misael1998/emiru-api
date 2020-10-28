const mongoose = require("mongoose");
const DB_USER = process.env.DB_USER;
const DB_PWD = process.env.DB_PWD;
const DB_DIR = process.env.DB_DIR;
const NODE_ENV = process.env.NODE_ENV;

const uri = `${
  NODE_ENV == "production" ? "mongodb+srv" : "mongodb"
}://${DB_USER}:${DB_PWD}@${DB_DIR}`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("DB connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
