// controllers/productsController.js

const getProducts = async (req, res, next) => {
  // Simulated array of products (replace with actual logic to fetch from database or API)
  const products = [
    {
      _id: '1',
      name: 'Product 1',
      price: 29.99,
      inStock: true,
    },
    {
      _id: '2',
      name: 'Product 2',
      price: 49.99,
      inStock: true,
    },
    {
      _id: '3',
      name: 'Product 3',
      price: 19.99,
      inStock: true,
    },
  ];

  res.json(products);
};

module.exports = { getProducts };
