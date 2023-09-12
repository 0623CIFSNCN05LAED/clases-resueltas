const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getProducts: function () {
    const productsFilePath = path.join(__dirname, "./productsDataBase.json");
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    return products;
  },
  saveProducts: function (products) {
    const productsFilePath = path.join(__dirname, "./productsDataBase.json");
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
  },
  findAll: function () {
    return this.getProducts();
  },
  findById: function (id) {
    const product = this.getProducts().find((product) => product.id == id);
    return product;
  },
  create: function (product) {
    console.log(`Creating product ${product.name}`);
    const products = this.getProducts();
    const newProduct = {
      id: uuidv4(),
      ...product,
    };
    products.push(newProduct);
    this.saveProducts(products);
  },
  update: function (id, product) {
    console.log(`Updating product ${product.name}`);
    // cargo todos los productos
    const products = this.getProducts();
    // busco un producto por su id
    const productToEdit = products.find((product) => product.id == id);
    // piso las propiedades
    Object.assign(productToEdit, product); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    // guardo los productos
    this.saveProducts(products);

    return product;
  },
  delete: function (id) {
    console.log(`Deleting product with id ${id}`);
    const products = this.getProducts();
    const nonDeletedProducts = products.filter((product) => product.id != id);
    this.saveProducts(nonDeletedProducts);
  },
};
