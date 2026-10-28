import { categories, products } from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ active, setActive }) {
  const list = active === "all" ? products : products.filter((p) => p.category === active);
  const tabs = [{ id: "all", name: "All" }, ...categories];
  return (
    <section className="container section" id="shop">
      <h2>New arrivals</h2>
      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button key={t.id} role="tab" aria-selected={active === t.id} className={active === t.id ? "on" : ""} onClick={() => setActive(t.id)}>
            {t.name}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
