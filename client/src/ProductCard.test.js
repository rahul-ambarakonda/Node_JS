import { render, screen } from '@testing-library/react';
import React from 'react';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: "prod-test-001",
    name: "Test Refrigerator",
    brand: "TestBrand",
    category: "Refrigerator",
    price: 999.99,
    imageUrl: "http://test.com/image.jpg",
    description: "A test product.",
    features: ["Feature 1"]
  };

  test('renders product name, brand, price, and image', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(/Test Refrigerator/i)).toBeInTheDocument();
    expect(screen.getByText(/TestBrand/i)).toBeInTheDocument();
    expect(screen.getByText(/\$999.99/i)).toBeInTheDocument();

    const productImage = screen.getByAltText(/Test Refrigerator/i);
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', mockProduct.imageUrl);
  });
});
