import React,{ useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SiteChrome from "../components/SiteChrome";
import ProductGrid from "../components/ProductGrid";
import { allProducts, products } from "../data/products";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "default";

  const visibleProducts = useMemo(() => {
    let list = category === "all" ? [...allProducts] : [...(products[category] || [])];
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, sort]);

  const update = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === "all" || value === "default") next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  };

  return (
    <SiteChrome>
      <main>
        <section className="shop-hero">
          <p className="eyebrow">STEVEWEAR</p>
          <h1>SHOP ALL.</h1>
        </section>
        <section className="section">
          <div className="shop-controls">
            <div className="shop-filter-group">
              {[["all", "ALL"], ["jeans", "JEANS"], ["shorts", "SHORTS"], ["polos", "POLOS"], ["shirts", "SHIRTS"]].map(([value, label]) => (
                <button key={value} className="shop-filter" onClick={() => update("category", value)}>{label}</button>
              ))}
            </div>
            <select className="shop-sort" value={sort} onChange={(e) => update("sort", e.target.value)}>
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
          <ProductGrid products={visibleProducts} />
        </section>
      </main>
    </SiteChrome>
  );
}
