const router = require("express").Router();
const controller = require("../controllers");

router.use("/", controller.blog.getAllPosts);
router.use("/:id", controller.blog.getPostById);
router.use("/new", controller.blog.createPost);

module.exports = router;
