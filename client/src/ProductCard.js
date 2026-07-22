import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-brand">{product.brand}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
