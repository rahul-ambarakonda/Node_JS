import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'; // Import the new CSS file

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        console.log('Fetched products:', data); // Log for verification
      } catch (error) {
        setError(error.message);
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}. Failed to fetch products.</div>;
  }

  return (
    <div className="product-list-container">
      <h2>Our Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
