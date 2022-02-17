import { useEffect, useState } from "react";
import { getProducts } from "../Api";
import ItemList from "../ItemList/ItemList";
import { NavLink, useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(false);

  const { categoryId, typeId } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      let filteredProducts = products;
      if (categoryId) {
        if (typeId) {
          filteredProducts = products.filter((item) => {
            return item[`${categoryId}`] === typeId;
          });
        } else {
          filteredProducts = products.filter((item) => {
            return item.destacado;
          });
        }
      }
      setProducts(filteredProducts);
      setLoading(false);
      setCategory(true);
    });
  }, [categoryId, typeId]);

  return (
    <>
      {category && (
        <div className="category">
          <div className="nav-link">
            <NavLink className="navLink" to="/products">
              All the Products
            </NavLink>
            <NavLink className="navLink" to="/products/destacado">
              Featured Products
            </NavLink>
            <NavLink className="navLink" to="/products/categoria/remeras">
              T-Shirts
            </NavLink>
            <NavLink className="navLink" to="/products/categoria/vestidos">
              Dresses
            </NavLink>
            <NavLink className="navLink" to="/products/categoria/zapatos">
              Shoes
            </NavLink>
          </div>
        </div>
      )}
      <div className="itemListContainer">
        <ItemList products={products} />
        {loading && <p>Loading products...</p>}
      </div>
    </>
  );
};

export default ItemListContainer;
