const controller = require("../controllers");
const router = require("express").Router();
const apidocs = require("./apidocs");

// **** Router Directory ****
router.use("/", apidocs);



module.exports = router;
