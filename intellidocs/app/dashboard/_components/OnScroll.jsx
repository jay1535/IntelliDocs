"use client";

import { useEffect, useState } from "react";

export default function HideOnScrollHeader({ children }) {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // hide when scrolling down
      if (currentY > lastY && currentY > 30) {
        setHidden(true);
      }
      // show when scrolling up
      else {
        setHidden(false);
      }

      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {children}
    </div>
  );
}
