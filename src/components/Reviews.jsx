import React from "react";
const reviews = [
  { text: "The jeans fit exactly how I wanted. The quality is really good for the price.", name: "Daniel A.", location: "Awka" },
  { text: "Bought two polos and ended up coming back for another one. Very clean fit.", name: "Michael O.", location: "Abuja" },
  { text: "Simple website, easy ordering and the shirt looks even better in person.", name: "Chinedu K.", location: "Port Harcourt" },
];

export default function Reviews() {
  return (
    <section className="section reviews-section">
      <div className="section-header"><div><p className="eyebrow">CUSTOMER FEEDBACK</p><h2>WHAT THEY SAY</h2></div></div>
      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review" key={review.name}>
            <div className="stars">★★★★★</div>
            <p>“{review.text}”</p>
            <strong>{review.name}</strong>
            <span>{review.location}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
