const mongodb = require("../db/connect");

const getUser = (table) => {
    userTable = mongodb.getDB().db("cse341").collection("user");

    var results = userTable.find();
    return results;
};

module.exports = {
    getUser,
};
