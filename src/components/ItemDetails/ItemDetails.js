import React from "react";
import './ItemDetails.css';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetails = ({ product }) => {

  return (
    <div className="itemDetails">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>

      <ItemCount stock={5} initial={1} productName={product} />
    </div>
  );
};

export default ItemDetails;
