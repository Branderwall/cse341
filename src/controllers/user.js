const mongodb = require("../db/connect");

const getUser = (table) => {
    userTable = mongodb.getDB().db("cse341").collection("user");

    var results = "This is a result.";

    console.log("results");
    return results;
};

module.exports = {
    getUser,
};
