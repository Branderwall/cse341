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
    res.json(result);
};

const createContact = async (req, res) => {
    // Uses JSON for request
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };

    // Uses URL Params for request
    // const contact = {
    //     "firstName": req.params.firstName,
    //     "lastName": req.params.lastName,
    //     "email": req.params.email,
    //     "favoriteColor": req.params.favoriteColor,
    //     "birthday": req.params.birthday,
    // };
    const result = await mongodb
        .getDB()
        .db("cse341")
        .collection("contacts")
        .insertOne(contact);

    console.log("Contact added " + result);
    res.send("Contact added: " + result.insertedId);
    res.json();
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
    const id = req.params.id;
    const filter = {
        _id: new ObjectId(id),
    };
    const result = await mongodb
        .getDB()
        .db("cse341")
        .collection("contacts")
        .deleteOne(filter, (err, obj) => {
            if (err) throw err;
        });

    res.send(result);
};

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact,
};
