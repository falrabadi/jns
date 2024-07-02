import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductTile from './ProductTile'; // Adjust path as needed
import './ProductList.css'; // Import your CSS file for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductTile key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
