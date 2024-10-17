    const productRoutes = require("./product.route.js");
    const homeRoute = require("./home.route.js");

    module.exports = (app) => {
        app.use("/", homeRoute);

        app.use("/products", productRoutes);
    }