const swaggerAutogen = require("swagger-autogen")();

// localhost:3000
// adamcse341.onrender.com
const doc = {
    info: {
        title: "Contacts API",
        description: "Contact creation, retrieval, update, and deletion API",
    },
    host: "adamcse341.onrender.com",
    schemes: ["https", "http"],
    tags: {
      name: "Contacts"
    },
    definitions: {
        Contacts: {
            firstName: "John",
            lastName: "Smith",
            email: "jsmith@test.com",
            favoriteColor: "Blue",
            birthday: "01-01-2001",
        },
    },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
