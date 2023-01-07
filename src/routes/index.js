const controller = require("../controllers");
const router = require("express").Router();

// **** Router Directory ****
router.get("/", controller.displayTestRouteMessage("Joanne Tan"));
router.use("/test", require("./test"));


module.exports = router;
