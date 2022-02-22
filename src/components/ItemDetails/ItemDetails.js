import React, { useState } from "react";
import "./ItemDetails.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ItemDetails = ({ product, quantity }) => {
  const [counter, setCounter] = useState(quantity);

  const onAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} "${product.name}" al carrito!`);
    setCounter(quantity);
  };

  return (
    <div className="itemDetails">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>

      {counter ? (
        <Link to="/cart">
          <Button name="Checkout" />
        </Link>
      ) : (
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetails;
