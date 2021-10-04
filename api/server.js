const express = require("express");
const accountsRouter = require("./accounts/accounts-router");
const server = express();

server.use(express.json());
server.use(express.Router("/api/accounts", accountsRouter));

server.get('/', (req,res) => {
    res.json("home")
})

module.exports = server;
