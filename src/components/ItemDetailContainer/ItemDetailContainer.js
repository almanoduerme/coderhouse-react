import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails";
import "./ItemDetailContainer.css";

import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getDoc(doc(firestoreDb, `products/${id}`))
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        setProduct(product);
      })
      .finally(() => {
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
