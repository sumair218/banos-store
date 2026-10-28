import { categories } from "../../data/products";

export default function CategoryGrid({ onPick }) {
  return (
    <section className="container section" id="collection">
      <h2>Shop by category</h2>
      <div className="cat-grid">
        {categories.map((c) => (
          <a key={c.id} href="#shop" className="cat-tile" onClick={() => onPick(c.id)}>
            <span className="cat-initial" aria-hidden="true">{c.name[0]}</span>
            <strong>{c.name}</strong>
            <small>{c.note}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
