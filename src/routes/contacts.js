const controller = require("../controllers");
const router = require("express").Router();

router.get("/", controller.contacts.getAllContacts);
router.get("/:id", controller.contacts.getContactById);

module.exports = router;
