import React from "react";
import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import CartDrawer from "./CartDrawer";
import Footer from "./Footer";

export default function SiteChrome({ children }) {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <AnnouncementBar />
      <Header onCartOpen={() => setCartOpen(true)} />
      {children}
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
