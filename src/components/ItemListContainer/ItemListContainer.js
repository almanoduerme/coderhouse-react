import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory, getCategorias } from "../Api";
import ItemList from "../ItemList/ItemList";
import { NavLink, useParams } from "react-router-dom";
import "./ItemListContainer.css";

// console.log(getProductsByCategory);

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  // useEffect(() => {
  //   if (categoryId) {
  //     getProductsByCategory(categoryId).then((products) => {
  //       setProducts(products);
  //       setLoading(false);
  //       setCategorias(categorias);
  //     });
  //   } else {
  //     getProducts().then((products) => {
  //       setProducts(products);
  //       setLoading(false);
  //       setCategorias(categorias);
  //     });
  //   }
  // }, [categoryId, categorias]);

  useEffect(() => {
    if (categoryId) {
      // setLoading(false);
      setTimeout(() => {
        getProductsByCategory(categoryId).then((products) => {
          setProducts(products);
        });
      }, 2000);
    } else {
      setLoading(false);
      getProducts().then((products) => {
        setProducts(products);
      });
    }
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div className="item-list-container">
          <div className="item-list-container__header">
            <div className="nav-link">
              {getCategorias().map((category) => (
                <NavLink
                  key={category.id}
                  to={`/products/${category.id}`}
                  className="nav-link__item"
                >
                  {category.description}
                </NavLink>
              ))}
            </div>
          </div>
          <ItemList products={products} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
