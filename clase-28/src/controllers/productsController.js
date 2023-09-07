const productService = require("../services/productService");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    // Do the magic
    const products = productService.getAllProducts();
    res.render("products", { products });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    // Do the magic
  },

  // Create - Form to create
  create: (req, res) => {
    // Do the magic
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    // Do the magic
    const product = req.body;
    console.log(product);
    res.redirect("/products");
  },

  // Update - Form to edit
  edit: (req, res) => {
    // Do the magic
  },
  // Update - Method to update
  update: (req, res) => {
    // Do the magic
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    // Do the magic
  },
};

module.exports = controller;
