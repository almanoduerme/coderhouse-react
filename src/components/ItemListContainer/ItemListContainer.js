import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const onAdd = () => {
    alert("Product added");
  };

  return (
    <>
      <div className="itemListContainer">
        <h1>{greeting}</h1>
        <ItemCount stock={5} initial={0} onAdd={() => onAdd} />
      </div>
    </>
  );
};

export default ItemListContainer;
