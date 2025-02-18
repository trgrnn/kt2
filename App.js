import React, { useState } from "react";
import ProductItem from "./ProductItem";
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Велосипед", price: 1000, count: 1 },
    { id: 2, name: "Самокат", price: 700, count: 1 },
    { id: 3, name: "Ролики", price: 1300, count: 2 },
    { id: 4, name: "Сноуборд", price: 19000, count: 4 },
  ]);

  const addProduct = () => {
    const input = prompt("Введите название и цену через пробел (например: Велосипед 1000):");
    if (!input) return;

    const [name, price] = input.split(" ");
    if (!name || isNaN(price)) {
      alert("Некорректные данные. Попробуйте снова.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      count: 1,
    };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateCount = (id, increment) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              count: Math.max(0, Math.min(25, product.count + (increment ? 1 : -1))),
            }
          : product
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={addProduct}>Добавить новый товар</button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={deleteProduct}
            onUpdateCount={updateCount}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
