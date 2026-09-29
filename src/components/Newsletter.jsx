import React,{ useState } from "react";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <section className="newsletter">
      <div>
        <p className="eyebrow">STAY UPDATED</p>
        <h2>GET THE NEXT DROP</h2>
        <p>New arrivals, limited releases and occasional offers. Straight to your inbox.</p>
      </div>
      <form onSubmit={submit}>
        <input type="email" placeholder="Your email address" required />
        <button type="submit" className={`btn btn-primary newsletter_btn ${subscribed ? "subscribed" : ""}`}>
          {subscribed ? "SUBSCRIBED ✓" : "SIGN ME UP"}
        </button>
      </form>
    </section>
  );
}
