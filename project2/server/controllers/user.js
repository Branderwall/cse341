const ObjectId = require("mongodb").ObjectId;
const { User } = require("../models/user");

const getAllUsers = async (req, res) => {
    // #swagger.tags = ['User']
    try {
        const result = await User.find().exec();

        // console.log(result);

        if (result) {
            res.status(200).json(result);
        } else {
            throw { status: 400, message: "No users found." };
        }
    } catch (err) {
        res.status(err.status || 400).json(
            { message: err.message } || "An error ocurred while locating users."
        );
    }
};

const getUserById = async (req, res) => {
    // #swagger.tags = ['User']
    try {
        if (!ObjectId.isValid(req.params.id)) {
            throw {
                status: 400,
                message: "Invalid id. Please use a vaild id.",
            };
        }

        const filter = {
            _id: new ObjectId(req.params.id),
        };

        const result = await User.findOne(filter);

        if (result) {
            res.status(200).json(result);
        } else {
            throw {
                status: 400,
                message: "Id not found. Please use a valid id.",
            };
        }
        // console.log(result);
    } catch (err) {
        res.status(err.status || 400).json(
            { message: err.message } ||
                "An error ocurred while locating a user."
        );
    }
};

const createUser = async (req, res) => {
    // #swagger.tags = ['User']
    try {

        const user = new User({
            displayName: req.body.displayName,
            firstName: req.body.firstName,
            lastName: req.lastName.body,
            email: req.body.email,
        });

        const result = await user.save();

        // console.log(result);

        if (result) {
            res.status(201).json(result._id);
        } else {
            throw {
                status: 400,
                message:
                    "An error ocurred while creating a user. Please review all required fields.",
            };
        }
    } catch (err) {
        res.status(err.status || 500).json(
            { message: err.message } ||
                "An error occured while creating a user."
        );
    }
};

const updateUser = async (req, res) => {
    // #swagger.tags = ['User']
    try {
        if (!ObjectId.isValid(req.params.id)) {
            throw {
                status: 400,
                message: "Invalid id. Please use a vaild id.",
            };
        }

        const filter = {
            _id: new ObjectId(req.params.id),
        };

        const user = {
            displayName: req.body.displayName,
            firstName: req.body.firstName,
            lastName: req.lastName.body,
            email: req.body.email,
        };

        const result = await User.findOneAndUpdate(
            filter,
            // { runValidators: true },
            { $set: user },
            { new: true }
        ).exec();

        // console.log(result);
        if (result) {
            res.status(204).send(result);
        } else {
            throw {
                status: 400,
                message: "Id not found. Please use a valid id.",
            };
        }
    } catch (err) {
        res.status(err.status || 500).json(
            { message: err.message } ||
                "An error occured while updating a user."
        );
    }
};

const deleteUser = async (req, res) => {
    // #swagger.tags = ['User']
    try {
        if (!ObjectId.isValid(req.params.id)) {
            throw {
                status: 400,
                message: "Invalid id. Please use a vaild id.",
            };
        }

        const filter = {
            _id: new ObjectId(req.params.id),
        };

        const result = await User.deleteOne(filter);

        if (result.deletedCount > 0) {
            res.status(200).send();
        } else {
            throw {
                status: 400,
                message: "Id not found. Please use a valid id.",
            };
        }
    } catch (err) {
        // console.log(err);
        res.status(err.status || 500).json(
            { message: err.message } ||
                "An error occured while deleting a user."
        );
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    createUser,
    deleteUser,
};
