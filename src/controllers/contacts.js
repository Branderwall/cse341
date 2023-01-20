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
    try {
        // Uses JSON for request
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday,
        };

        const result = await mongodb
            .getDB()
            .db("cse341")
            .collection("contacts")
            .insertOne(contact);

        console.log("Contact added " + result);
        res.send("Contact added: " + result.insertedId);
        res.json();
    } catch (err) {
        res.json({ message: err });
    }
};

const updateContact = async (req, res) => {
    try {
        const id = req.params.id;
        const contact = req.body;

        const filter = {
            _id: new ObjectId(id),
        };

        console.log(contact);

        const result = await mongodb
            .getDB()
            .db("cse341")
            .collection("contacts")
            .updateOne(filter, {
                $set: contact,
            });

        if (result.modifiedCount > 0) {
            res.status(204).send(result);
        }
    } catch (err) {
        res.json({ message: err });
    }
};

const deleteContact = async (req, res) => {
    try {
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

        if (result.modifiedCount > 0) {
            res.status(200).json(result);
        }
    } catch (err) {
        res.json({ message: err });
    }
};

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact,
};
