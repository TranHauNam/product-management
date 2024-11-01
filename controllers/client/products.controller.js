const Product = require('../../models/product.model');
module.exports.index = async (req, res) => {
    const products = await Product.find({
        status: "active",
        deleted: false   
    });
    products.forEach((product) => {
        product.newPrice =  parseFloat((product.price*(1-product.discountPercentage/100)).toFixed(2));
    });
    console.log(products);
    res.render("client/pages/products/index.pug", {
        pageTitle: "Products",
        products: products      
    });
};