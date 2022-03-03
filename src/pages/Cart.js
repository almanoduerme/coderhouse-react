import CartContext from "../context/CartContext";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import "./stylesheet/Cart.css";

export default function Cart() {
  const { cart, removeItem, getTotalPrice, removeQuantity } =
    useContext(CartContext);

    if(cart.length <= 1) {
      console.log("No hay nada en el carrito");
    } else {
      console.log("Hay algo en el carrito");
    }


  return (
    <div className="Cart">
      <h1>Cart</h1>
      <ul className="cart-ul">
        {cart.length <= 0 ? (
          <>
            <p>No items in cart</p>
            <NavLink to="/products">
              <Button name="Back to shop" />
            </NavLink>
          </>
        ) : (
          cart.map((item) => (
            <li key={item.item.id}>
              <img className="img" src={item.item.img} alt={item.item.name} />
              <p>{item.item.name}</p>
              <p>{item.quantity}</p>
              <p>{item.item.price}</p>
              <button onClick={() => removeQuantity(item)}>
                Remove Quantity
              </button>
              <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      {cart.length > 0 && (
        <p className="getTotalPrice">Total price: {getTotalPrice()}</p>
      )}
    </div>
  );
}
