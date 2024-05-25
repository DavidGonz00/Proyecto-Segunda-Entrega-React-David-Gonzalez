import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} />
      
    </div>
  );
}

export default ProductCard;









