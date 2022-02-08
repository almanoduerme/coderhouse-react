import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    console.log(`items added to cart ${count}`);
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
