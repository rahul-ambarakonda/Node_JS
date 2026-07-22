import React from 'react';
import ProductList from './ProductList'; // Import the new ProductList component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Product App</h1>
        <ProductList /> {/* Render the ProductList component */}
      </header>
    </div>
  );
}

export default App;
