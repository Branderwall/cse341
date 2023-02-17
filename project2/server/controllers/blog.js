const ObjectId = require("mongodb").ObjectId;
const Blog = require("../models/blog");

const getAllPosts = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        const result = await Blog.find().exec();

        // console.log(result);

        if (result) {
            res.status(200).json(result);
        } else {
            throw { status: 400, message: "No posts found." };
        }
    } catch (err) {
        res.status(err.status || 400).json(
            { message: err.message } || "An error ocurred while locating posts."
        );
    }
};

const getPostById = async (req, res) => {
    // #swagger.tags = ['Blog']
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

        const result = await Blog.findOne(filter);

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
                "An error ocurred while locating a post."
        );
    }
};

const createPost = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        // const blog = req.body;
        const blog = new Blog({
            title: req.body.title,
            slug: req.body.slug,
            body: req.body.body,
            author: req.body.author,
            publishDate: req.body.publishDate,
            tags: req.body.tags,
            featuredImage: req.body.featuredImage,
        });

        const result = await blog.save();

        // console.log(result);

        if (result) {
            res.status(201).json(result._id);
        } else {
            throw {
                status: 400,
                message:
                    "An error ocurred while creating a post. Please review all required fields.",
            };
        }
    } catch (err) {
        res.status(err.status || 500).json(
            { message: err.message } ||
                "An error occured while creating a post."
        );
    }
};

const updatePost = async (req, res) => {
    // #swagger.tags = ['Blog']
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

        const blog = {
            title: req.body.title,
            slug: req.body.slug,
            body: req.body.body,
            author: req.body.author,
            publishDate: req.body.publishDate,
            tags: req.body.tags,
            featuredImage: req.body.featuredImage,
        };

        const result = await Blog.findOneAndUpdate(
            filter,
            { runValidators: true },
            { $set: blog },
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
                "An error occured while updating a post."
        );
    }
};

const deletePost = async (req, res) => {
    // #swagger.tags = ['Blog']
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

        const result = await Blog.deleteOne(filter);

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
                "An error occured while deleting a post."
        );
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    updatePost,
    createPost,
    deletePost,
};
