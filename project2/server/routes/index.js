const controller = require("../controllers");
const router = require("express").Router();
const apidocs = require("./apidocs");
const blog = require("./blog");

// **** Router Directory ****
router.use("/", apidocs);
router.get("/", controller.displayTestRouteMessage("Home Page"));
router.use("/blog", blog);

module.exports = router;
