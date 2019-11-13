const express = require("express");
const session = require("express-session");

const sessionConfig = require("./config/sessionConfig");

const server = express();
server.use(express.json());

server.use(session(sessionConfig));
server.use("/api");

module.exports = server;
