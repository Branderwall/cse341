const router = require("express").Router();

// **** Router Directory ****
const testRouter = require('./test');
router.use('/test', testRouter);



//test message for root route
router.get("/", (req, res) => {
    res.send("James I. Bond");
});


module.exports = router;
