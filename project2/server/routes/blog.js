const router = require("express").Router();
const controller = require("../controllers/blog");
// const { requiresAuth } = require('express-openid-connect');

router.get("/", controller.getAllPosts);
router.get("/:id", controller.getPostById);
router.post("/", controller.createPost);
router.put("/:id", controller.updatePost);
router.delete("/:id", controller.deletePost);

module.exports = router;
