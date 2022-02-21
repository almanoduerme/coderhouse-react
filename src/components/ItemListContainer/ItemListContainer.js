import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory, getCategorias } from "../Api";
import ItemList from "../ItemList/ItemList";
import { NavLink, useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setTimeout(() => {
        getProductsByCategory(categoryId).then((products) => {
          setProducts(products);
          setLoading(false);
        });
      }, 2000);
    } else {
      getProducts().then((products) => {
        setProducts(products);
        setLoading(false);
      });
    }
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div className="itemListContainer">
          <div className="category">
            {getCategorias().map((category) => (
              <NavLink
                key={category.id}
                to={`/products/${category.id}`}
                className="nav-link"
              >
                {category.description}
              </NavLink>
            ))}
          </div>
          <ItemList products={products} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
