const router = require("express").Router();
const controller = require("../controllers");

router.get("/", controller.blog.getAllPosts);
router.get("/:id", controller.blog.getPostById);
router.post("/new", controller.blog.createPost);

module.exports = router;
