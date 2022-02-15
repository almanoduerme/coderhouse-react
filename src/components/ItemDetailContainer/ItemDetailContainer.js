import { useEffect, useState } from "react";
import { getProduct } from "../Api";
import ItemDetails from "../ItemDetails/ItemDetails";
import "./ItemDetailContainer.css";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct().then((product) => {
      setProduct(product);
      setShowDetails(true);
      setLoading(false);
    });
  }, []);

  return (
    <div className="itemDetailContainer">
      {showDetails && <ItemDetails producto={product} />}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ItemListContainer;
