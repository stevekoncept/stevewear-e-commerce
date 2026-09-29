import React from "react";
import { Link } from "react-router-dom";

export default function CollectionCard({ number, category, image }) {
  return (
    <Link to={`/shop?category=${category}`} className="collection-card">
      <img src={image} alt={category} />
      <div>
        <p>{number}</p>
        <h3>{category.toUpperCase()}</h3>
        <span>SHOP NOW →</span>
      </div>
    </Link>
  );
}
