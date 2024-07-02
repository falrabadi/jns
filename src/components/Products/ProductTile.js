import React, { useState } from 'react';
import './ProductTile.css'; // Import CSS file for styling

const ProductTile = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`product-tile ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      {!product.stock && <p className="out-of-stock">Out of Stock</p>}
      {product.stock && <p className='in-stock'>In Stock</p>}
    </div>
  );
};

export default ProductTile;
