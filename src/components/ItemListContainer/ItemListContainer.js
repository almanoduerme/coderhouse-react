import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    if (count > 0) {
      console.log(`Items added to cart ${count}!`);
    } else {
      console.log("No items added to cart!");
    }
  };

  // PROMISE

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        const productos = [
          {
            id: 1,
            name: "Product 1",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 1",
            price: 1.99,
          },
          {
            id: 2,
            name: "Product 2",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 2",
            price: 2.99,
          },
          {
            id: 3,
            name: "Product 3",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 3",
            price: 3.99,
          },
          {
            id: 4,
            name: "Product 4",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 4",
            price: 4.99,
          },
          {
            id: 5,
            name: "Product 5",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 5",
            price: 5.99,
          },
          {
            id: 6,
            name: "Product 6",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 6",
            price: 6.99,
          },
          {
            id: 7,
            name: "Product 7",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 7",
            price: 7.99,
          },
          {
            id: 8,
            name: "Product 8",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 8",
            price: 8.99,
          },
          {
            id: 9,
            name: "Product 9",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 9",
            price: 9.99,
          },
          {
            id: 10,
            name: "Product 10",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 10",
            price: 10.99,
          },
          {
            id: 11,
            name: "Product 11",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 11",
            price: 11.99,
          },
          {
            id: 12,
            name: "Product 12",
            img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Description 12",
            price: 12.99,
          },
        ];
        resolve(productos);
      }, 2000);
    });

    task
      .then((productos) => {
        setProducts(productos);
        setLoading(false);
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  }, []);

  return (
    <>
      <div className="itemListContainer">
        <h1>{greeting}</h1>
        <ItemCount stock={5} initial={0} onAdd={onAdd} />
        <ItemList products={products} />
        {loading && <p>Loading products...</p>}
      </div>
    </>
  );
};

export default ItemListContainer;
