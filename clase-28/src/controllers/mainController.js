const productServices = require("../services/productService");

const controller = {
  index: (req, res) => {
    const visitedProducts = productServices.getVisitedProducts();
    const inSaleProducts = productServices.getInSaleProducts();

    res.render("index", {
      visitedProducts,
      inSaleProducts,
    });
  },
  search: (req, res) => {
    const keywords = req.query.keywords;
    const foundProducts = productServices.searchProducts(keywords);
    res.render("results", { foundProducts });
  },
};

module.exports = controller;
