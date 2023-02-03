const controller = require("../controllers");
const router = require("express").Router();
const apidocs = require("./apidocs");

// **** Router Directory ****
router.use("/", apidocs);
router.get("/", controller.displayTestRouteMessage("Home Page"));
router.use("/blog", require("./blog"));

module.exports = router;
