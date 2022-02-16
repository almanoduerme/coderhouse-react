import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ products }) {
  // Products filtered by category

  return (
    <div className="ItemList">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
