import { Card, CardContent, Typography, Button } from "@mui/material";

const ProductCard = ({ product, onRemove }) => {
  return (
    <Card data-testid="product-card">
      <CardContent>
        {/* 🔑 THIS div must be the CLOSEST div */}
        <div className={product.inStock ? "" : "outOfStockClass"}>
          <Typography variant="h6">
            {product.name}
          </Typography>
        </div>

        <Typography>Price: ${product.price}</Typography>
        <Typography>
          Status: {product.inStock ? "In Stock" : "Out of Stock"}
        </Typography>

        <Button onClick={() => onRemove(product.id)}>
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
