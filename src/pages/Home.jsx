import { useState } from "react";
import BanoHero from "../components/hero/BanoHero";
import CategoryGrid from "../components/home/CategoryGrid";
import ProductGrid from "../components/product/ProductGrid";
import logo from "../assets/logo.jpg";

export default function Home() {
  const [active, setActive] = useState("all");
  return (
    <>
      <BanoHero logo={logo} />
      <CategoryGrid onPick={setActive} />
      <ProductGrid active={active} setActive={setActive} />
    </>
  );
}
