const productServices = require("./productService");
const db = require("../data/db");

jest.mock("../data/db", () => {
  return {
    products: {
      findAll: jest.fn(() => mockProducts),
      findById: jest.fn((id) =>
        mockProducts.find((product) => product.id == id)
      ),
      create: jest.fn((product) => (mockProducts.push(product), product)),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };
});

describe("productService", () => {
  beforeEach(() => {
    mockProducts = [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        discount: 10,
        category: "visited",
      },
      {
        id: 2,
        name: "Item 2",
        price: 200,
        discount: 20,
        category: "visited",
      },
      {
        id: 3,
        name: "Product 3",
        price: 150,
        discount: 0,
        category: "in-sale",
      },
    ];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAllProducts", () => {
    it("should return all products", () => {
      const result = productServices.getAllProducts();
      expect(result).toHaveLength(3);
      expect(result).toBe(mockProducts);
    });
  });

  describe("getProduct", () => {
    it("should return a specific product by ID", () => {
      const result = productServices.getProduct(mockProducts[0].id);
      expect(result).toEqual(mockProducts[0]);
    });

    it("should return undefined for a non-existent product", () => {
      const result = productServices.getProduct(999);
      expect(result).toBeUndefined();
    });
  });

  describe("getFormattedProduct", () => {
    it("should return a specific product by ID with formatted prices", () => {
      const result = productServices.getFormattedProduct(mockProducts[0].id);
      expect(result).toEqual({
        ...mockProducts[0],
        price: "$ 100,00",
        priceWithDiscount: "$ 90,00",
        discount: "10",
      });
    });
  });

  describe("getVisitedProducts", () => {
    it("should return all visited products with formatted prices", () => {
      const result = productServices.getVisitedProducts();
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        ...mockProducts[0],
        price: "$ 100,00",
        priceWithDiscount: "$ 90,00",
        discount: "10",
      });
    });
  });

  describe("getInSaleProducts", () => {
    it("should return all in sale products with formatted prices", () => {
      const result = productServices.getInSaleProducts();
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        ...mockProducts[2],
        price: "$ 150,00",
        priceWithDiscount: "$ 150,00",
        discount: "0",
      });
    });
  });

  describe("searchProducts", () => {
    it("should return matching products by name", () => {
      const result = productServices.searchProducts("product");
      expect(result).toHaveLength(2);
    });

    it("should return an empty array for no matching products", () => {
      const result = productServices.searchProducts("nonexistent");
      expect(result).toHaveLength(0);
    });
  });

  describe("createProduct", () => {
    it("should create a product", () => {
      const newProduct = {
        name: "New Product",
        price: 50,
        discount: 5,
        category: "visited",
      };
      productServices.createProduct(newProduct);

      expect(db.products.create).toHaveBeenCalledWith(newProduct);
      expect(mockProducts).toContainEqual(newProduct);
    });
  });

  describe("updateProduct", () => {
    it("should update a product", () => {
      const product = {
        id: 1,
        name: "Updated Product",
        price: 50,
        discount: 5,
        category: "visited",
      };
      productServices.updateProduct(product.id, product);

      expect(db.products.update).toHaveBeenCalledWith(product.id, product);
    });
  });
});
