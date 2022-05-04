const mongoose = require('mongoose');
const Schema = mongoose.Schema; // define the structure of our documents that we store in collection

const blogSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema); // will be looking for collection 'Blogs' automatically
module.exports = Blog;


