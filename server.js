const express = require('express');
const app = express();
const port = 3001;
const products = require('./data/products'); // Require the mock product data

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

// New API endpoint for product listing
app.get('/api/products', (req, res) => {
  try {
    res.json(products); // Send the products data as JSON
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
