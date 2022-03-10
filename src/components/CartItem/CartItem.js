import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartItem = ({ item, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <article className="CardCartItem">
      <header className="HeaderCartItem">
        <h2 className="ItemHeaderCartItem">{item.album}</h2>
      </header>
      <section className="ContainerItemCartItem">
        <img src={item.img} alt={item.album} className="ImgItemCartItem" />
        <p className="InfoCartItem">{item.artist}</p>
        <p className="InfoCartItem">Precio x Unidad: ${item.price}</p>
      </section>
      <footer className="ItemFooterCartItem">
        <p className="InfoCartItem">Subtotal: ${item.price * item.stock}</p>
        <button className="ButtonCartItem" onClick={() => removeItem(item)}>
          X
        </button>
      </footer>
    </article>
  );
};

export default CartItem;
