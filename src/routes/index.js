const controller = require("../controllers");
const router = require("express").Router();

// **** Router Directory ****
router.get("/", controller.displayTestRouteMessage("Joanne Tan"));
router.use("/contacts", require("./contacts"));

module.exports = router;
