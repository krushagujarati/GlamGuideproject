// src/components/ProductsSection.jsx
import React from 'react';

import product1 from './Assets/P1.jpg';
import product2 from './Assets/P2.jpg';
import product3 from './Assets/P3.jpg';
import product4 from './Assets/P4.jpg';

const products = [
  { id: 1, name: "Product One", image: product1, price: "$99" },
  { id: 2, name: "Product Two", image: product2, price: "$129" },
  { id: 3, name: "Product Three", image: product3, price: "$149" },
  { id: 4, name: "Product Four", image: product4, price: "$89" },
];

const ProductsSection = () => {
  return (
    <section className="products-section" id="products">
      <h2 className="section-title">Featured Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-img-container">
              <img src={product.image} alt={product.name} className="product-img" />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
