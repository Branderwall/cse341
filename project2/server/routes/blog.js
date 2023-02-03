const router = require("express").Router();
const controller = require("../controllers/blog");

router.get("/", controller.getAllPosts);
router.get("/:id", controller.getPostById);
router.post("/", controller.createPost);
router.delete("/:id", controller.deletePost);

module.exports = router;
