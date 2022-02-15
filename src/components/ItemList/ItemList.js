import React, { useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ products, id }) {
  // Products filtered by category

  const filteredProducts = products.filter((product) => {
    if (id === "1") {
      return product.destacado === "si";
    } else if (id === "2") {
      return product.destacado === "no";
    } else {
      return product;
    }
  });

  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);

  return (
    <div className="ItemList">
      {filteredProducts.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
