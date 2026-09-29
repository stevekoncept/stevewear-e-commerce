import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allProducts, formatPrice } from "../data/products";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const normalized = query.trim().toLowerCase();
  const matches = normalized
    ? allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(normalized) ||
          product.category.includes(normalized)
      )
    : [];

  return (
    <div className="search-overlay active" onClick={onClose}>
      <div className="search-box" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <p className="eyebrow">SEARCH STEVEWEAR</p>
        <input
          autoFocus
          type="text"
          placeholder="Search jeans, polos, shirts..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div id="searchResults">
          {normalized && !matches.length && (
            <p className="no-search-results">No products found.</p>
          )}
          {matches.map((product) => (
            <Link
              className="search-result"
              key={product.id}
              to={`/shop?category=${product.category}`}
              onClick={onClose}
            >
              <span>{product.name}</span>
              <strong>{formatPrice(product.price)}</strong>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
