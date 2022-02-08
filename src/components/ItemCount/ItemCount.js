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
      <p className="counter">Counter: {count}</p>
      <div className="itemCountButtons">
        <Button name="Decrement" handleClick={decrement} />
        <Button name="Increment" handleClick={increment} />
      </div>
      <Button widthButton="100%" name="Add to cart" handleClick={() => onAdd(count)} />
    </div>
  );
};

export default ItemCount;
