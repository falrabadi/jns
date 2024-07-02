import React from 'react';
import ProductTile from './ProductTile'; // Import ProductTile component
import './ProductList.css'; // Import ProductList.css for styling

const ProductList = () => {
  // Hardcoded product data
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, description: 'Description for Product 1', stock: true },
    { id: 2, name: 'Product 2', price: 29.99, description: 'Description for Product 2', stock: false },
    { id: 3, name: 'Product 3', price: 39.99, description: 'Description for Product 3', stock: true },
  ];

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
