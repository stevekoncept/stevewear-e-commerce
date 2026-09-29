import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">STEVEWEAR / SEASON 01</p>
        <h1>BUILT FOR <span>EVERYDAY.</span></h1>
        <p className="hero-description">
          Clean fits. Reliable essentials. Clothing designed to move with you from weekday to weekend.
        </p>
        <div className="hero-buttons">
          <Link to="/shop" className="btn btn-primary">SHOP THE DROP</Link>
          <a href="#collections" className="btn btn-dark">VIEW COLLECTIONS</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=85" alt="Stevewear clothing" />
        <div className="hero-label">EST. 2026<strong>Awka, NG</strong></div>
      </div>
    </section>
  );
}
