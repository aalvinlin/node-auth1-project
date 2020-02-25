const bcrypt = require("bcryptjs");
const express = require("express");

const database = require("../data/login.db3");

const router = express.Router();

// GET all users
router.get("/", (req, res) => {

    database.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get users."})
        })
})

// GET a user by ID
router.get("/:id", (req, res) => {

    database.getUserByID(req.params.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get user."})
        })
})


// POST a user
router.post("/", (req, res) => {

    if (!req.body || !req.body.username || !req.body.password)
        { res.status(400).json({message: "Username and password are both required."})}

    else
    {
        database.addUser(req.body)
            .then(usersAdded => {
                res.status(200).json(usersAdded);
            })
            .catch(error => {
                res.status(500).json({message: "Could not add user."})
            })
    }
})

module.exports = router;

