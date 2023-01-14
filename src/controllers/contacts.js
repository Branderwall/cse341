const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res) => {
    const result = await mongodb
        .getDB()
        .db("cse341")
        .collection("contacts")
        .find()
        .limit(10)
        .maxTimeMS(10)
        .toArray();
    res.send(result);
};

const getContactById = async (req, res) => {
    const id = req.params.id;
    const filter = {
        _id: new ObjectId(id),
    };

    const result = await mongodb
        .getDB()
        .db("cse341")
        .collection("contacts")
        .find(filter)
        .limit(10)
        .maxTimeMS(10)
        .toArray();
    res.send(result[0]);
};

module.exports = {
    getAllContacts,
    getContactById,
};
