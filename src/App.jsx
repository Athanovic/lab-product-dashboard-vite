import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Container, Typography, Button, Box } from '@mui/material';

function App() {
  // Define the list of products
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, inStock: true },
    { id: 2, name: 'Smart Watch', price: 249.99, inStock: true },
    { id: 3, name: 'Laptop Stand', price: 49.99, inStock: false },
    { id: 4, name: 'USB-C Cable', price: 12.99, inStock: true },
    { id: 5, name: 'Mechanical Keyboard', price: 159.99, inStock: false },
    { id: 6, name: 'Webcam HD', price: 79.99, inStock: true },
    { id: 7, name: 'Portable SSD', price: 129.99, inStock: true },
    { id: 8, name: 'Gaming Mouse', price: 59.99, inStock: false },
  ];

  // State for filtering
  const [filterInStock, setFilterInStock] = useState(false);

  // Filter products based on availability
  const filteredProducts = filterInStock
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}
        >
          Product Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Discover our amazing collection of tech products
        </Typography>
        
        {/* Filter button */}
        <Button
          variant={filterInStock ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setFilterInStock(!filterInStock)}
          sx={{ 
            borderRadius: 2,
            px: 3,
            py: 1,
            textTransform: 'none',
            fontSize: '1rem'
          }}
        >
          {filterInStock ? 'Show All Products' : 'Show In-Stock Only'}
        </Button>
      </Box>

      {/* Product List Component */}
      <ProductList products={filteredProducts} />
    </Container>
  );
}

export default App;