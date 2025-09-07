"use client";

import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export function useSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const footerTextRef = useRef<HTMLParagraphElement>(null);

  const handleMouseEnter = () =>
    window.innerWidth >= 768 && setIsExpanded(true);
  const handleMouseLeave = () =>
    window.innerWidth >= 768 && setIsExpanded(false);

  useLayoutEffect(() => {
    const allTextElements = [
      ...textRefs.current.filter(Boolean),
      footerTextRef.current,
    ].filter(Boolean);

    if (isExpanded) {
      gsap.fromTo(
        allTextElements,
        { opacity: 0, x: -20, scale: 0.9, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.7)",
          delay: 0.15,
        }
      );
    } else {
      gsap.to(allTextElements, {
        opacity: 0,
        x: -15,
        scale: 0.9,
        rotationY: -10,
        duration: 0.25,
        stagger: 0.03,
        ease: "power2.in",
      });
    }
  }, [isExpanded]);

  return {
    isExpanded,
    setIsExpanded,
    textRefs,
    footerTextRef,
    handleMouseEnter,
    handleMouseLeave,
  };
}
