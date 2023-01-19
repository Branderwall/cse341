const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res) => {
    const result = await mongodb
        .getDB()
        .db("cse341")
        .collection("contacts")
        .find()
        .toArray();
    res.json(result);
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
        .toArray();
    res.send(result[0]);
};

const createContact = async (req, res) => {
    const contact = {
        firstName: req.params.firstName,
        lastName: req.params.lastName,
        email: req.params.email,
        favoriteColor: req.params.favoriteColor,
        birthday: req.params.birthday,
    };
    const result = await mongodb
        .getDB()
        .db("cse341")
        .collection("contacts")
        .insertOne(contact);

    res.send("Contact added" + result.id);
};

const updateContact = async (req, res) => {
    const contact = {
        id: req.params.id,
        firstName: req.params.firstName,
        lastName: req.params.lastName,
        email: req.params.email,
        favoriteColor: req.params.favoriteColor,
        birthday: req.params.birthday,
    };

    const filter = {
        _id: new ObjectId(id),
    };

    const result = await mongodb
        .getDB()
        .db("cse341")
        .collection("contacts")
        .updateOne(
            { _id: id },
            {
                $set: { contact },
            }
        );

    res.send("Contact Updated: ");
};

const deleteContact = async (req, res) => {
    //something
};

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact,
};
