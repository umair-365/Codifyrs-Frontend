import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" }); // Or "smooth" if you prefer
  }, [pathname]);

  return null;
};

export default ScrollToTop;
