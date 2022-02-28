import "./CartWidget.css";
import { GrCart } from "react-icons/gr";

const CartWidget = () => {

  return (
    <div className="cartWidget">
      <GrCart />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
