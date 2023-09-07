const products = require("../data/products");

const productServices = {
  getAllProducts: () => {
    return products;
  },
  getProduct: (id) => {
    return products.find((product) => product.id == id);
  },
  getVisitedProducts: () => {
    return products.filter((product) => product.category == "visited");
  },
  getInSaleProducts: () => {
    return products.filter((product) => product.category == "in-sale");
  },
  searchProducts: (query) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  },
};

module.exports = productServices;
