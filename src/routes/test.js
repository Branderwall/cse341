const router = require('express').Router();


// routing test message
router.get("/", (req, res) => {
    res.send("Joanne Tan");
});



module.exports = router;