import React from 'react';
import ProductCard from './ProductCard';
import { Grid, Typography, Box } from '@mui/material';

/**
 * ProductList Component
 * Renders a list of product cards dynamically
 * Handles empty state when no products are available
 */
function ProductList({ products }) {
  // Conditional rendering: Display message when no products are in stock
  if (!products || products.length === 0) {
    return (
      <Box 
        sx={{ 
          textAlign: 'center', 
          py: 8,
          px: 2
        }}
      >
        <Typography 
          variant="h5" 
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          No products available
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Please check back later or adjust your filters
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {/* Using fragment to avoid unnecessary DOM nodes */}
      <Grid container spacing={3}>
        {/* Iteration: Map over products array and render ProductCard for each */}
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductList;