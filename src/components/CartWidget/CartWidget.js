import "./CartWidget.css";
import { GrCart } from "react-icons/gr";
import CartContext from "../../context/CartContext";
import React, { useContext } from "react";

const CartWidget = () => {
  const { getQuantityTotal } = useContext(CartContext);

  return (
    <div className="cartWidget">
      <GrCart />
      <span>{getQuantityTotal()}</span>
    </div>
  );
};

export default CartWidget;
