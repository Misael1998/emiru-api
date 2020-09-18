const express = require("express");
require("dotenv").config({ path: "./env/config.env" });
const cors = require("cors");
const db = require("./db/db");

//ENV
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

const server = express();
server.use(express.json());

db();

server.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} on port ${PORT}`)
);
