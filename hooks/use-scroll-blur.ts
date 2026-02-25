"use client";

import { useEffect, useState } from "react";

export function useScrollBlur(threshold = 24) {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsBlurred(window.scrollY > threshold);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isBlurred;
}
