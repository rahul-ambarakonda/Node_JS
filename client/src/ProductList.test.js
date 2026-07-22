import { render, screen } from '@testing-library/react';
import React from 'react';
import ProductList from './ProductList';

describe('ProductList', () => {
  test('renders loading message initially', () => {
    // Note: Due to the constraint of "no mocks of external services",
    // we cannot reliably test the fetched data or error states without mocking `fetch`.
    // This test only verifies the initial render state before the fetch completes.
    render(<ProductList />);
    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument();
  });
});
