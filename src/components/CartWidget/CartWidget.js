import "./CartWidget.css";
import { GrCart } from "react-icons/gr";
import CartContext from "../../context/CartContext";
import React, { useContext } from "react";

const CartWidget = () => {
  const { quantityTotal } = useContext(CartContext);

  return (
    <div className="cartWidget">
      <GrCart />
      <span>{quantityTotal()}</span>
    </div>
  );
};

export default CartWidget;
