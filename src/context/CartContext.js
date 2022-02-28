import { createContext, useState } from "react";

const Context = createContext();

export function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((purchase) => purchase.item.id === id);
  };

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };

    if (isInCart(item.id)) {
      let product = cart.find((p) => p.item.id === item.id);
      product.quantity += quantity;

      let newCart = cart.map((p) => {
        if (product.item.id === p.item.id) return product;
        return p;
      });

      setCart(newCart);
    } else {
      if (quantity > 0) {
        setCart((prevState) => [...prevState, newItem]);
      } else {
        console.log("Debés agregar al menos 1 item");
      }
    }
  };

  const removeItem = (itemId) => {
    const newArray = cart.filter((purchase) => purchase.item.id !== itemId);
    setCart([...newArray]);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <Context.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
