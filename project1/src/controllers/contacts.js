const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res) => {
    // #swagger.tags = ['Contacts']
    try {
        const result = await mongodb
            .getDB()
            .db("cse341")
            .collection("contacts")
            .find()
            .toArray();
        res.json(result);
    } catch (err) {
        res.json({ message: err });
    }
};

const getContactById = async (req, res) => {
    // #swagger.tags = ['Contacts']
    try {
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
    } catch (err) {
        res.json({ message: err });
    }
};

const createContact = async (req, res) => {
    /*  #swagger.tags = ['Contacts']
        #swagger.parameters['body'] = {
            schema: { $ref: '#/definitions/Contacts' }
        }
    */
    try {
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

        // console.log("Contact added " + result.insertedId);
        if (result.acknowledged == true) {
            res.status(201).json(result.insertedId);
        }
    } catch (err) {
        res.json({ message: err });
    }
};

const updateContact = async (req, res) => {
    /* Swagger Definitions
    #swagger.tags = ["Contacts"]
    */
    try {
        const id = req.params.id;
        const contact = req.body;
        // const contact = {
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     email: req.body.email,
        //     favoriteColor: req.body.favoriteColor,
        //     birthday: req.body.birthday,
        // };

        const filter = {
            _id: new ObjectId(id),
        };

        // console.log(contact);
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
    // #swagger.tags = ['Contacts']
    try {
        const id = req.params.id;
        const filter = {
            _id: new ObjectId(id),
        };

        const result = await mongodb
            .getDB()
            .db("cse341")
            .collection("contacts")
            .deleteOne(filter);

        if (result.deletedCount > 0) {
            res.status(200).send();
        }
    } catch (err) {
        // console.log(err);
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
