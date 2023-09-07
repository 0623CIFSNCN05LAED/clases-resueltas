const products = require("../data/products");

const productServices = {
  getAllProducts: () => {
    return products;
  },
  getVisitedProducts: () => {
    return products.filter((product) => product.category == "visited");
  },
  getInSaleProducts: () => {
    return products.filter((product) => product.category == "in-sale");
  },
};

module.exports = productServices;
