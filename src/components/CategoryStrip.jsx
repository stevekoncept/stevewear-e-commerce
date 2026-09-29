import React from "react";
import { Link } from "react-router-dom";

const categories = ["jeans", "shorts", "polos", "shirts"];

export default function CategoryStrip() {
  return (
    <section className="category-strip" id="shop">
      {categories.map((category) => (
        <Link key={category} to={`/shop?category=${category}`}>
          {category.toUpperCase()} <span>→</span>
        </Link>
      ))}
    </section>
  );
}
