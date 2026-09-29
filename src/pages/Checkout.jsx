import React from "react";
import { Link } from "react-router-dom";
import SiteChrome from "../components/SiteChrome";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

export default function Checkout() {
  const { cart, cartTotal } = useCart();
  return (
    <SiteChrome>
      <main>
        <section className="section">
          <p className="eyebrow">STEVEWEAR</p>
          <h1>CHECKOUT.</h1>
          <div style={{ marginTop: "3.2rem" }}>
            {cart.length ? (
              <>
                {cart.map((item) => <p key={item.id}>{item.name} × {item.quantity} — {formatPrice(item.price * item.quantity)}</p>)}
                <h3 style={{ marginTop: "2rem" }}>TOTAL: {formatPrice(cartTotal)}</h3>
              </>
            ) : (
              <>
                <p>Your cart is empty.</p>
                <Link to="/shop" className="btn btn-primary" style={{ marginTop: "2rem" }}>SHOP NOW</Link>
              </>
            )}
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
