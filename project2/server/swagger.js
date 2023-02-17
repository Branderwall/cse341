const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
    info: {
        title: "Blog API",
        description: "Blog creation, retrieval, update, and deletion API",
    },
    servers: [
        {
            url: "https://adamcse341blog.onrender.com/",
            description: "Remote Server",
        },
        {
            url: "http://localhost:3000/",
            description: "Local Server",
        },
    ],
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
const endpointsFiles = ["./routes/index"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
