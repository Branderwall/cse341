const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title: String,
    slug: String,
    body: String,
    author: String,
    publishDate: String,
    tags: String,
    featuredImage: String
});

const Blog = model('Blog', blogSchema, 'blog');

module.exports = Blog;

