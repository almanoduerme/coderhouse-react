import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Item.css";

export default function Item({ product }) {
  return (
    <div className="card">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <div className="card-content">
        <p>{product.description}</p>
        <p>{product.price}</p>

        <Link to={`/item/${product.id}`}>
          <Button name="Ver más"></Button>
        </Link>
      </div>
    </div>
  );
}
