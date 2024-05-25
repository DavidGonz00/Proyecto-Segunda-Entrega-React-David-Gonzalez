import React, { useState } from 'react';
import '../style/StyleProduct.css';

const Counter = ({ stock }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => alert(`Añadido ${count} producto(s) al carrito`)}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
