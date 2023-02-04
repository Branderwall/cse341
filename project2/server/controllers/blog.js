const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllPosts = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        const result = await mongodb
            .getDB()
            .db("cse341blog")
            .collection("blog")
            .find()
            .toArray();
        res.json(result);
    } catch (err) {
        res.json({ message: err });
    }
};

const getPostById = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        const id = req.params.id;
        const filter = {
            _id: new ObjectId(id),
        };

        const result = await mongodb
            .getDB()
            .db("cse341blog")
            .collection("blog")
            .find(filter)
            .toArray();
        res.json(result);
        console.log(result);
    } catch (err) {
        res.json({ message: err });
    }
};

const getPostBySlug = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        const slug = req.params.slug;
        const filter = { slug: slug };

        const result = await mongodb
            .getDB()
            .db("cse341blog")
            .collection("blog")
            .find(filter)
            .toArray();
        res.json(result);
        console.log(result);
    } catch (err) {
        res.json({ message: err });
    }
};

const createPost = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        // const blog = req.body;
        const blog = {
            title: req.body.title,
            slug: req.body.slug,
            body: req.body.body,
            author: req.body.author,
            publishDate: req.body.publishDate,
            tags: req.body.tags,
            featuredImage: req.body.featuredImage,
        };

        const result = await mongodb
            .getDB()
            .db("cse341blog")
            .collection("blog")
            .insertOne(blog);

        if (result.acknowledged == true) {
            res.status(201).json(result.insertedId);
        }
    } catch (err) {
        res.json({ message: err });
    }
};

const updatePost = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        const id = req.params.id;

        const filter = {
            _id: new ObjectId(id),
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

        const result = await mongodb
            .getDB()
            .db("cse341blog")
            .collection("blog")
            .updateOne(filter, {
                $set: blog,
            });

        if (result.modifiedCount > 0) {
            res.status(204).send(result);
        }
    } catch (err) {
        res.json({ message: err });
    }
};

const deletePost = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        const id = req.params.id;
        const filter = {
            _id: new ObjectId(id),
        };

        const result = await mongodb
            .getDB()
            .db("cse341blog")
            .collection("blog")
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
    getAllPosts,
    getPostById,
    getPostBySlug,
    updatePost,
    createPost,
    deletePost,
};
