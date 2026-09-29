import React from "react";
import { formatPrice } from "../data/products";
import QuantityControl from "./QuantityControl";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>{formatPrice(item.price)}</p>
        <QuantityControl quantity={item.quantity} onIncrease={() => increaseQuantity(item.id)} onDecrease={() => decreaseQuantity(item.id)} />
      </div>
      <button className="remove-item" onClick={() => removeFromCart(item.id)}>REMOVE</button>
    </div>
  );
}
