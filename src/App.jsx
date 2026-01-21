import ProductList from "./components/ProductList.jsx";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Tablet", price: 600, inStock: true},
    { id: 3, name: "Phone", price: 800, inStock: false},
  ]);

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <>
      <h1>Product Dashboard</h1>
      <ProductList products={products} onRemove={removeProduct} />
    </>
  );
};

export default App;
