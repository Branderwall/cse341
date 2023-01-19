const express = require("express");
const mongodb = require("./db/connect");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// create port variable
const port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

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
