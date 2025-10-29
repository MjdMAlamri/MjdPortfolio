// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // if you're navigating to an in-page anchor like /projects#busmap, keep default
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // or "smooth"
  }, [pathname, hash]);

  return null;
}
