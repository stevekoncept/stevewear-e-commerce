import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">STEVE<span>WEAR</span></Link>
          <p>Modern everyday clothing. Designed in Nigeria.</p>
        </div>
        <div>
          <h4>SHOP</h4>
          <Link to="/shop?category=jeans">Jeans</Link>
          <Link to="/shop?category=shorts">Shorts</Link>
          <Link to="/shop?category=polos">Polos</Link>
          <Link to="/shop?category=shirts">Shirts</Link>
        </div>
        <div>
          <h4>HELP</h4>
          <a href="#">Contact</a><a href="#">Delivery</a><a href="#">Returns</a><a href="#">Size Guide</a>
        </div>
        <div>
          <h4>FOLLOW</h4>
          <a href="#">Instagram</a><a href="#">TikTok</a><a href="#">X</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Stevewear. All rights reserved.</p>
        <p>Awka, Nigeria</p>
      </div>
    </footer>
  );
}
