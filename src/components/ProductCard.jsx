import React from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

export default function ProductCard({ product, onAdded }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    onAdded?.();
  };

  return (
    <article className="product-card">
      <div className="product-image">
        {product.badge && (
          <span className={`product-badge ${product.badgeDark ? "dark" : ""}`}>
            {product.badge}
          </span>
        )}
        <img src={product.image} alt={product.name} />
        <button className="quick-add" onClick={handleAdd}>ADD TO CART</button>
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <strong>{formatPrice(product.price)}</strong>
      </div>
    </article>
  );
}
