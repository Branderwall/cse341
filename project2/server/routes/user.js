const router = require("express").Router();
const controller = require("../controllers/user");
const { requiresAuth } = require('express-openid-connect');

router.get("/", controller.getAllUsers);
router.get("/:id", controller.getUserById);
router.post("/", requiresAuth(), controller.createUser);
router.put("/:id", requiresAuth(), controller.updateUser);
router.delete("/:id", requiresAuth(), controller.deleteUser);

module.exports = router;
