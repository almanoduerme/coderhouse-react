import CartContext from "../context/CartContext";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import "./stylesheet/Cart.css";

export default function Cart() {
  const { cart, removeItem, getTotalPrice } = useContext(CartContext);

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
              <p>{item.item.artist}</p>
              <p>{item.item.album}</p>
              <p>{item.quantity}</p>
              <p>{item.item.price} USD</p>
              <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      {cart.length > 0 && (
        <p className="getTotalPrice">Total price: {getTotalPrice()} USD</p>
      )}
    </div>
  );
}
