import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../data/products";

export default function CartDrawer() {
  const { items, open, setOpen, remove, total } = useCart();
  if (!open) return null;

  const message = items.map((i) => i.qty + " x " + i.name).join(", ");
  const link = "https://wa.me/923123375620?text=" + encodeURIComponent("Hello Bano’s, I want to order: " + message);

  return (
    <div className="drawer-wrap" onClick={() => setOpen(false)}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()} aria-label="Cart">
        <div className="drawer-head">
          <h3>Your cart</h3>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
        {items.length === 0 ? (
          <p>Your cart is empty. Add something from the new arrivals.</p>
        ) : (
          <>
            <ul>
              {items.map((i) => (
                <li key={i.id}>
                  <span>{i.qty} x {i.name}</span>
                  <span>{formatPrice(i.qty * i.price)}</span>
                  <button onClick={() => remove(i.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p className="total">Total: {formatPrice(total)}</p>
            <a className="wa-btn" href={link}>Send order on WhatsApp</a>
          </>
        )}
      </aside>
    </div>
  );
}
