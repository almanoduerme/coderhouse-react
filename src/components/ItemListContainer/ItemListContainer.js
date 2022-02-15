import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../Api";
import ItemList from "../ItemList/ItemList";
import { NavLink, Route, useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
      setCategory(true);
    });
  }, [id]);

  return (
    <>
      {category && (
        <div className="category">
          <div className="nav-link">
            <NavLink to="/products">All</NavLink>

            <NavLink to="/products/:id">DESTACADO SI</NavLink>
            <NavLink to="/products/:id">DESTACADO NO</NavLink>
          </div>
        </div>
      )}
      <div className="itemListContainer">
        <Route path="/products/" element={<ItemList products={products} />} />
        <Route path="/products/:id" element={<ItemListContainer />} />

        <ItemList products={products} id={id} />
        {loading && <p>Loading products...</p>}
      </div>
    </>
  );
};

export default ItemListContainer;
