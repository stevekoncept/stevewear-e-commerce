import React from "react";
import { Link } from "react-router-dom";
import SiteChrome from "../components/SiteChrome";
import Hero from "../components/Hero";
import CategoryStrip from "../components/CategoryStrip";
import ProductGrid from "../components/ProductGrid";
import StatementSection from "../components/StatementSection";
import Collections from "../components/Collections";
import AboutSection from "../components/AboutSection";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";
import { allProducts } from "../data/products";

export default function Home() {
  return (
    <SiteChrome>
      <main>
        <Hero />
        <CategoryStrip />
        <section className="section" id="new-arrivals">
          <div className="section-header">
            <div><p className="eyebrow">THE LATEST</p><h2>NEW ARRIVALS</h2></div>
            <Link to="/shop" className="text-link">VIEW ALL →</Link>
          </div>
          <ProductGrid products={allProducts.slice(0, 4)} />
        </section>
        <StatementSection />
        <Collections />
        <AboutSection />
        <Reviews />
        <Newsletter />
      </main>
    </SiteChrome>
  );
}
