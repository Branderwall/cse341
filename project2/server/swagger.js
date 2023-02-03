const swaggerAutogen = require("swagger-autogen")();

// localhost:3000
// adamcse341.onrender.com
const doc = {
    info: {
        title: "Blog API",
        description: "Blog creation, retrieval, update, and deletion API",
    },
    host: "adamcse341blog.onrender.com",
    schemes: ["https", "http"],
    tags: {
        name: "Blog",
    },
    definitions: {
        Blog: {
            title: "Adam Blog",
            slug: "adam-blog",
            body: "This is the body of the blog post.",
            author: "Adam Tan",
            publishDate: "02-02-2023",
            tags: "['tech', 'jsx', 'react']",
            featuredImage: "http://fakeurl.com/image",
        },
    },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
