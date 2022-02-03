import React, { useState } from "react";
import Button from "../Button/Button";

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
    <>
      <p>Counter: {count}</p>
      <div>
        <Button name="Increment" handleClick={increment} />
        <Button name="Decrement" handleClick={decrement} />
      </div>
      <Button name="Add to cart" handleClick={onAdd()} />
    </>
  );
};

export default ItemCount;
