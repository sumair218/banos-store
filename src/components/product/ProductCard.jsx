import { formatPrice } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { add } = useCart();
  return (
    <article className="card">
      <div className="card-img">
        {product.image ? <img src={product.image} alt={product.name} /> : <span>{product.name[0]}</span>}
      </div>
      <h3>{product.name}</h3>
      <p className="price">{formatPrice(product.price)}</p>
      <button onClick={() => add(product)}>Add to cart</button>
    </article>
  );
}
