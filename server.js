const express = require("express");

const authRouter = require("./auth/auth-router");

const server = expres();
server.use(express.json());

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
    res.status(200).json({message: "API is working."})
})

module.exports = server;