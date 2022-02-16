import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../Api";
import ItemDetails from "../ItemDetails/ItemDetails";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      setProduct(products[id]);
      setLoading(false);
      setShowDetails(true);
    });
  }, [id]);

  return (
    <div className="itemDetailContainer">
      {showDetails && <ItemDetails product={product} />}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
