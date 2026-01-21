import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products, onRemove }) => {
  return (
    <>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRemove={onRemove}
          />
        ))
      )}
    </>
  );
};

export default ProductList;

