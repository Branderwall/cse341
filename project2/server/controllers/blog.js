const getAllPosts = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        const result = await mongodb
            .getDB()
            .db("cse341")
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
            .db("cse341")
            .collection("blog")
            .find(filter)
            .toArray();
        res.json(result);
    } catch (err) {
        res.json({ message: err });
    }
};

const createPost = async (req, res) => {
    // #swagger.tags = ['Blog']
    try {
        const blog = req.body;

        const result = await mongodb
            .getDB()
            .db("cse341")
            .collection("blog")
            .insertOne(blog);

        if (result.acknowledged == true) {
            res.status(201).json(result.insertedId);
        }
    } catch (err) {
        res.json({ message: err });
    }
};

module.exports = {
    getAllPosts,
    getPostById,
};
