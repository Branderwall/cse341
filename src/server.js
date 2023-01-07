const express = require("express");
const app = express();

// create port variable
const port = process.env.PORT || 8080;

// Send request to routes for directing
app.use("/", require("./routes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
