const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    thumbnail: String,
    deleted: Boolean,
    status: String,
    stock: Number
});

const Product = mongoose.model('Product', productSchema, "products");

module.exports = Product;