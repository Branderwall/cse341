const controller = require("../controllers/contacts");
const router = require("express").Router();

router.get("/", controller.getAllContacts);
router.post("/", controller.createContact);
router.get("/:id", controller.getContactById);
router.put("/:id", controller.updateContact);
router.delete("/:id", controller.deleteContact);

module.exports = router;
