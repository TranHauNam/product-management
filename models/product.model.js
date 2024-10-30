const mongoose = require('mongoose');
const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    thumbnail: String
});

const Product = mongoose.model('Product', productSchema, "products");

module.exports = Product;