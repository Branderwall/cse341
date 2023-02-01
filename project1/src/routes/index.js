const controller = require("../controllers");
const router = require("express").Router();
const apidocs = require("./apidocs");

// **** Router Directory ****
router.use("/", apidocs);
router.get("/", controller.displayTestRouteMessage("Joanne Tan"));
router.use("/contacts", require("./contacts"));


module.exports = router;
