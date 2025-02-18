import React from "react";
import './App.css';

const ProductItem = ({ product, onDelete, onUpdateCount }) => {
  const handleDecrement = () => {
    if (product.count === 1) {
      onDelete(product.id);
    } else {
      onUpdateCount(product.id, false);
    }
  };

  const handleIncrement = () => {
    onUpdateCount(product.id, true);
  };

  return (
    <div
      onDoubleClick={() => onDelete(product.id)}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        textAlign: "center",
        width: "150px",
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span style={{ margin: "0 10px" }}>{product.count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ProductItem;
