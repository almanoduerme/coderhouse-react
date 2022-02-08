import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    if (count > 0) {
      console.log(`Items added to cart ${count}!`);
    } else {
      console.log("No items added to cart!");
    }
  };

  return (
    <>
      <div className="itemListContainer">
        <h1>{greeting}</h1>
        <ItemCount stock={5} initial={0} onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemListContainer;
