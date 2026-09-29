import React from "react";
export default function QuantityControl({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="quantity-control" aria-label="Quantity controls">
      <button className="quantity-btn" onClick={onDecrease} aria-label="Decrease quantity">−</button>
      <span>{quantity}</span>
      <button className="quantity-btn" onClick={onIncrease} aria-label="Increase quantity">+</button>
    </div>
  );
}
