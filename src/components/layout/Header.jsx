import { useCart } from "../../context/CartContext";
import { categories } from "../../data/products";
import logo from "../../assets/logo.jpg";

export default function Header() {
  const { count, setOpen } = useCart();
  return (
    <header className="site-header">
      <div className="container header-row">
        <a className="brand" href="#top">
          <img src={logo} alt="" />
          <span>Bano’s</span>
        </a>
        <input className="search" type="search" placeholder="Search dresses, bags, winter wear" aria-label="Search" />
        <button className="cart-btn" onClick={() => setOpen(true)}>
          Cart ({count})
        </button>
      </div>
      <nav className="container nav" aria-label="Categories">
        {categories.map((c) => (
          <a key={c.id} href="#shop">{c.name}</a>
        ))}
        <a href="#visit" className="nav-end">Visit the store</a>
      </nav>
    </header>
  );
}
