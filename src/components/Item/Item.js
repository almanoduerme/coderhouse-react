import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Item.css";

export default function Item({ product }) {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <h3>{product.artist}</h3>
      <div className="card-content">
        <p>{product.album}</p>
        <p>{product.year}</p>
        <p>{product.price} USD</p>

        <Link to={`/item/${product.id}`}>
          <Button name="Ver más"></Button>
        </Link>
      </div>
    </div>
  );
}
