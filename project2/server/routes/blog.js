const router = require("express").Router();
const controller = require("../controllers");

router.get("/", controller.blog.getAllPosts);
router.get("/:id", controller.blog.getPostById);
router.post("/", controller.blog.createPost);
router.delete("/:id", controller.blog.deletePost);

module.exports = router;
