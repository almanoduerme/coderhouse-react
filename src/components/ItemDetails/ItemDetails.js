import React, { useState, useContext } from "react";
import "./ItemDetails.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

// import CartContext
import CartContext from "../../context/CartContext";

// Component
const ItemDetails = ({ product, quantity }) => {
  const { addItem } =
    useContext(CartContext);
  const [counter, setCounter] = useState(quantity);

  const onAdd = (quantity) => {
    setCounter(quantity);
    addItem(product, quantity);
    console.log(product);
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
