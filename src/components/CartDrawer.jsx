import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";
import CartItem from "./CartItem";

export default function CartDrawer({ open, onClose }) {
  const { cart, cartTotal } = useCart();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <>
      <div className={`cart-overlay ${open ? "active" : ""}`} onClick={onClose} />
      <aside className={`cart-drawer ${open ? "active" : ""}`}>
        <div className="cart-header">
          <h2>YOUR CART</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="cart-items">
          {cart.length ? cart.map((item) => <CartItem key={item.id} item={item} />) : <p className="empty-cart">Your cart is empty.</p>}
        </div>
        <div className="cart-footer">
          <div className="cart-total"><span>TOTAL</span><strong>{formatPrice(cartTotal)}</strong></div>
          <Link to="/checkout" className="btn btn-primary checkout-btn" onClick={onClose}>CHECKOUT</Link>
          <p>Taxes and delivery calculated at checkout.</p>
        </div>
      </aside>
    </>
  );
}
