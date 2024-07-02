import React from 'react';

const ProductTile = ({ product }) => {
  return (
    <div className="product-tile">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      {product.inStock ? <p className="in-stock">In Stock</p> : <p className="out-of-stock">Out of Stock</p>}
    </div>
  );
};

export default ProductTile;
