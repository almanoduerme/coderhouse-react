import React, { useState } from "react";
import Button from "../Button/Button";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemCount">
      <div className="itemCountButtons">
        <Button widthButton="45%" name="-" handleClick={decrement} />
        <p className="counter">{count}</p>
        <Button widthButton="45%" name="+" handleClick={increment} />
      </div>

      {count === 0 ? (
        <Button margin=".5rem 0 0 0" widthButton="100%" name="No hay stock" />
      ) : (
        <Button
          margin=".5rem 0 0 0"
          widthButton="100%"
          name="Agregar al carrito"
          handleClick={() => onAdd(count)}
        />
      )}
    </div>
  );
};

export default ItemCount;
