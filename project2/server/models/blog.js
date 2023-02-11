const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title: {type: String, required: [true, 'Title required']},
    slug: {type: String, required: [true, 'Post Slug required']},
    body: {type: String, required: [true, 'Body Text required']},
    author: {type: String, required: [true, 'Author required']},
    publishDate: {type: String, required: [true, 'Publish Date required']},
    tags: String,
    featuredImage: String
});

const Blog = model('Blog', blogSchema, 'blog');

module.exports = Blog;

