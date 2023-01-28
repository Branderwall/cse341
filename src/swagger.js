const swaggerAutogen = require("swagger-autogen")();

const contactSchema = {
    Contact: {
        type: "object",
        properties: {
            id: { type: "ObjectId" },
            firstName: {
                type: "string",
                example: "John",
            },
            lastName: {
                type: "string",
                example: "Smith",
            },
            email: {
                type: "string",
                example: "jsmith@test.com",
            },
            favoriteColor: {
                type: "string",
                example: "Blue",
            },
            birthday: {
                type: "string",
                example: "01-01-2001",
            },
        },
    },
};

const doc = {
    info: {
        title: "Contacts API",
        description: "Contact creation, retrieval, update, and deletion API",
    },
    servers: [{ url: "adamcse341.onrender.com" }, { url: "localhost:3000" }],
    schemes: ["https", "http"],
    // tags: [
    //     {
    //         name: "Contacts",
    //         description: "Contact information",
    //     },
    // ],
    components: {
        schemas: contactSchema,
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
