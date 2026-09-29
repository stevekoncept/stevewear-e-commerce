import React from "react";
export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <p className="eyebrow">ABOUT STEVEWEAR</p>
        <h2>CLOTHES FOR <span>REAL LIFE.</span></h2>
        <p>Stevewear is an independent clothing brand focused on creating versatile everyday pieces with a clean, modern attitude.</p>
        <p>From denim you can wear all week to polos and shirts that work almost anywhere, every piece is designed to become part of your everyday rotation.</p>
        <a href="#" className="btn btn-primary">OUR STORY</a>
      </div>
      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85" alt="Stevewear lifestyle" />
      </div>
    </section>
  );
}
