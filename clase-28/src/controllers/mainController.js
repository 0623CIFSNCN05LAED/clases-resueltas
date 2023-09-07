const productServices = require("../services/productService");

const controller = {
  index: (req, res) => {
    // Do the magic
    const visitedProducts = productServices.getVisitedProducts();
    const inSaleProducts = productServices.getInSaleProducts();

    res.render("index", {
      visitedProducts,
      inSaleProducts,
    });
  },
  search: (req, res) => {
    // Do the magic
  },
};

module.exports = controller;
