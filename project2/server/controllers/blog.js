const ObjectId = require("mongodb").ObjectId;
const Blog = require("../models/blog");

const getAllPosts = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        const result = await Blog.find().exec();

        res.setHeader("Content-Type", "application/json");
        res.status(200).json(result);
        // console.log(result);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

const getPostById = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json("Invalid id. Please use a vaild id.");
        }

        const filter = {
            _id: new ObjectId(req.params.id),
        };

        const result = await Blog.find(filter).exec();

        res.setHeader("Content-Type", "application/json");
        res.status(200).json(result);
        // console.log(result);
    } catch (err) {
        res.status(400).json({ message: err });
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
        }
    } catch (err) {
        res.status(500).json(
            { message: err } || "An error occured while creating a post."
        );
    }
};

const updatePost = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json("Invalid id. Please use a vaild id.");
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
            { $set: blog },
            { new: true }
        ).exec();

        // console.log(result);
        res.status(204).send(result);

    } catch (err) {
        res.status(500).json(
            { message: err } || "An error occured while updating a post."
        );
    }
};

const deletePost = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json("Invalid id. Please use a vaild id.");
        }

        const filter = {
            _id: new ObjectId(req.params.id),
        };

        const result = await Blog.deleteOne(filter);

        if (result.deletedCount > 0) {
            res.status(200).send();
        }
    } catch (err) {
        // console.log(err);
        res.status(500).json(
            { message: err } || "An error occured while deleting a post."
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
