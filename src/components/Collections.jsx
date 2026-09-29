import React from "react";
import CollectionCard from "./CollectionCard";

const collections = [
  { number: "01", category: "jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=85" },
  { number: "02", category: "shorts", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85" },
  { number: "03", category: "polos", image: "https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG9sb3xlbnwwfHwwfHx8MA%3D%3D" },
  { number: "04", category: "shirts", image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1000&q=85" },
];

export default function Collections() {
  return (
    <section className="section" id="collections">
      <div className="section-header">
        <div><p className="eyebrow">SHOP BY CATEGORY</p><h2>THE COLLECTIONS</h2></div>
      </div>
      <div className="collection-grid">
        {collections.map((item) => <CollectionCard key={item.category} {...item} />)}
      </div>
    </section>
  );
}
