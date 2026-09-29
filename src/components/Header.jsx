import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import SearchOverlay from "./SearchOverlay";
import { useCart } from "../context/CartContext";

export default function Header({ onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <header className="header">
        <div className="container nav">
          <button
            className="menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>

          <NavLink to="/" className="logo">STEVE<span>WEAR</span></NavLink>

          <nav className="desktop-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <a href="/#new-arrivals">New Arrivals</a>
            <a href="/#collections">Collections</a>
            <a href="/#about">About</a>
          </nav>

          <div className="nav-actions">
            <button
              className="nav-icon"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              ⌕
            </button>
            <button
              className="nav-icon cart-icon"
              aria-label="Shopping cart"
              onClick={onCartOpen}
            >
              🛒
              <span>{cartCount}</span>
            </button>
          </div>
        </div>
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
