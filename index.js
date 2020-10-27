const express = require("express");
require("dotenv").config({ path: "./env/config.env" });
const cors = require("cors");
const db = require("./db/db");

const errorHandler = require("./middleware/errorHandler");

//ENV
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

const server = express();
server.use(express.json());
server.use(cors());

db();

//Routes files
const register = require("./routes/register");
const login = require("./routes/login");
const token = require("./routes/token");

//Routes
server.use("/emiru/api/register", register);
server.use("/emiru/api/login", login);
server.use("/emiru/api/token", token);

server.use(errorHandler);

server.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} on port ${PORT}`)
);
