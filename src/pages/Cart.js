import CartContext from "../context/CartContext";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";

export default function Cart() {
  const { cart, removeItem, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
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
              <p>{item.item.name}</p>
              <p>{item.item.price}</p>
              <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      
      {cart.length > 0 && <p>Total: {getTotalPrice()}</p>}
    </div>
  );
}
