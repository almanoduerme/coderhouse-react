import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../Api";
import ItemList from "../ItemList/ItemList";
import { NavLink, useParams } from "react-router-dom";

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
            <NavLink to="/products">TODOS LOS PRODUCTOS</NavLink>
            <NavLink to="/products/destacado">PRODUCTOS DESTACADOS</NavLink>
            <NavLink to="/products/categoria/remeras">REMERAS</NavLink>
            <NavLink to="/products/categoria/vestidos">Vestidos</NavLink>
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
