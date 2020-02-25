const database = require("../data/login.db3");

module.exports = {
    addUser,

    getUsers,
    getUserByID
}

function getUsers() {
    return database("users");
}

function getUserByID(id) {
    return database("users")
        .where({id})
        .first();
}

function addUser(user) {
    return database("users")
        .insert(user);
}