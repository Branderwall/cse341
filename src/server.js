const express = require("express");
const mongodb = require("./db/connect");
const app = express();

// create port variable
const port = process.env.PORT || 3000;

// Send request to routes for directing
app.use("/", require("./routes"));

mongodb.initDB((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
});
