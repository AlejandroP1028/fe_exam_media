"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";

export function useSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const footerTextRef = useRef<HTMLParagraphElement>(null);

  // Detect screen size (mobile vs desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hover handlers (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile) setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsExpanded(false);
  };

  // GSAP animations
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
    isMobile,
    textRefs,
    footerTextRef,
    handleMouseEnter,
    handleMouseLeave,
  };
}
