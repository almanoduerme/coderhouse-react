import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { getProducts } from "../Api";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting = "Hello" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`);
  };

  return (
    <div className="itemListContainer">
      <h1>{greeting}</h1>
      <ItemCount stock={5} initial={1} onAdd={handleOnAdd} />
      <ItemList products={products} />
      {loading && <p>Loading products...</p>}
    </div>
  );
};

export default ItemListContainer;
