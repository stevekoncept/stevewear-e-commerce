import React from "react";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      <NavLink to="/" onClick={onClose}>Home</NavLink>
      <NavLink to="/shop" onClick={onClose}>Shop</NavLink>
      <a href="/#new-arrivals" onClick={onClose}>New Arrivals</a>
      <a href="/#collections" onClick={onClose}>Collections</a>
      <a href="/#about" onClick={onClose}>About</a>
    </div>
  );
}
