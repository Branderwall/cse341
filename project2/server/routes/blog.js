const router = require("express").Router();
const controller = require("../controllers/blog");
const { requiresAuth } = require('express-openid-connect');

router.get("/", controller.getAllPosts);
router.get("/:id", controller.getPostById);
router.post("/", requiresAuth(), controller.createPost);
router.put("/:id", requiresAuth(), controller.updatePost);
router.delete("/:id", requiresAuth(), controller.deletePost);

module.exports = router;
