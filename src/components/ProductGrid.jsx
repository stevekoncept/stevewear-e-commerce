import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.length ? products.map((product) => <ProductCard key={product.id} product={product} />) : <p className="no-products">No products found.</p>}
    </div>
  );
}
