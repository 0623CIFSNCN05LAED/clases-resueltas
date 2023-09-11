const db = require("../data/db");

const formatProductPrices = function (product) {
  const priceWithDiscount =
    product.price - product.price * (product.discount / 100);
  product.priceWithDiscount = `$ ${priceWithDiscount.toLocaleString("es", {
    minimumFractionDigits: 2,
  })}`;

  product.price = `$ ${product.price.toLocaleString("es", {
    minimumFractionDigits: 2,
  })}`;

  product.discount = product.discount.toLocaleString("es");

  return product;
};
const formatProductsPrices = function (products) {
  return products.map((product) => formatProductPrices(product));
};

const productServices = {
  getAllProducts: () => {
    return db.products.find();
  },

  getProduct: (id) => {
    const product = db.products.findById(id);
    return formatProductPrices(product);
  },
  getVisitedProducts: () => {
    const products = db.products
      .find()
      .filter((product) => product.category == "visited");
    return formatProductsPrices(products);
  },
  getInSaleProducts: () => {
    const products = db.products
      .find()
      .filter((product) => product.category == "in-sale");
    return formatProductsPrices(products);
  },
  searchProducts: (query) => {
    const products = db.products
      .find()
      .filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    return formatProductsPrices(products);
  },
};

module.exports = productServices;
