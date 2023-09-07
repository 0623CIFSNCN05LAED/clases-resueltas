module.exports = {
  getFinalPrice: (product) => {
    const price = product.price - product.price * (product.discount / 100);
    return price.toLocaleString("es", { minimumFractionDigits: 2 });
  },
  getPrice: (product) => {
    return product.price.toLocaleString("es", { minimumFractionDigits: 2 });
  },
  getDiscount: (product) => {
    return product.discount.toLocaleString("es");
  },
};
