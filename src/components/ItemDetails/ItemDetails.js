import React from "react";
import "./ItemDetails.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetails = ({ producto }) => {
  const onAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`);
  };

  return (
    <div className="itemDetails">
      <div>
        <h1>{producto.name}</h1>
        <img src={producto.img} alt={producto.name} />
        <p>{producto.description}</p>
        <p>{producto.price}</p>
        <ItemCount stock={5} initial={0} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetails;
