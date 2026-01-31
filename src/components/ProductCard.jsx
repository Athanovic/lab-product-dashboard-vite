import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import styles from '../styles/ProductCard.module.css';

/**
 * ProductCard Component
 * Displays individual product information
 * Applies conditional styling for out-of-stock products
 */
function ProductCard({ product }) {
  const { name, price, inStock } = product;

  return (
    <Card 
      className={inStock ? styles.card : styles.cardOutOfStock}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: inStock ? 'translateY(-4px)' : 'none',
          boxShadow: inStock ? 6 : 1,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Typography 
            variant="h6" 
            component="h2"
            className={styles.productName}
            sx={{ 
              mb: 1,
              fontWeight: 600,
              color: inStock ? 'text.primary' : 'text.disabled'
            }}
          >
            {name}
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography 
            variant="h5" 
            className={styles.price}
            sx={{ 
              fontWeight: 700,
              color: inStock ? 'primary.main' : 'text.disabled'
            }}
          >
            ${price.toFixed(2)}
          </Typography>
        </Box>

        <Box>
          {inStock ? (
            <Chip 
              label="In Stock" 
              color="success" 
              size="small"
              className={styles.statusChip}
              sx={{ fontWeight: 500 }}
            />
          ) : (
            <Chip 
              label="Out of Stock" 
              color="error" 
              size="small"
              className={styles.statusChipOutOfStock}
              sx={{ fontWeight: 500 }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;