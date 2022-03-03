import React, { useState, useContext } from "react";
import "./ItemDetails.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

// import CartContext
import CartContext from "../../context/CartContext";
import { useNotificationServices } from "../../services/notification/NotificationServices";

// Component
const ItemDetails = ({ product, quantity }) => {
  const { addItem } = useContext(CartContext);
  const setNotification = useNotificationServices();

  const [counter, setCounter] = useState(quantity);

  const onAdd = (quantity) => {
    setCounter(quantity);
    addItem(product, quantity);
    setNotification("success", `Se agregó ${product.name} al carrito `);
  };

  return (
    <div className="itemDetails">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>

      {counter ? (
        <Link to="/cart">
          <Button name="Finalizar mi compra" />
        </Link>
      ) : (
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetails;
