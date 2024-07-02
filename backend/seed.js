const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path to your Product model if necessary

const products = [
  {
    name: 'Product 1',
    price: 19.99,
    inStock: true,
  },
  {
    name: 'Product 2',
    price: 29.99,
    inStock: false,
  },
  {
    name: 'Product 3',
    price: 39.99,
    inStock: true,
  },
];

const seedDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Old products removed');

    // Insert new products
    await Product.insertMany(products);
    console.log('Database seeded with products');

    // Close the connection
    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDB();
