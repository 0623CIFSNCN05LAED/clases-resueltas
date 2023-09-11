const fs = require("fs");
const path = require("path");

const db = {
  products: {
    find: () => {
      const productsFilePath = path.join(
        __dirname,
        "../data/productsDataBase.json"
      );
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      return products;
    },
    findById: (id) => {
      const productsFilePath = path.join(
        __dirname,
        "../data/productsDataBase.json"
      );
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      const product = products.find((product) => product.id == id);
      return product;
    },
    create: (product) => {
      console.log(`Creating product ${product.name}`);
      return product;
    },
    update: (id, product) => {
      console.log(`Updating product ${product.name}`);
      return product;
    },
    delete: (id) => {
      console.log(`Deleting product with id ${id}`);
    },
  },
};

module.exports = db;
