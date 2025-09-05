"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 1.02,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power3.out",
        }
      );
      prevPathnameRef.current = pathname;
      return;
    }

    // Only animate if pathname actually changed
    if (prevPathnameRef.current === pathname) return;

    const tl = gsap.timeline();

    tl.to(contentRef.current, {
      opacity: 0,
      y: -20,
      scale: 0.98,
      filter: "blur(4px)",
      duration: 0.25,
      ease: "power2.inOut",
    }).fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 1.02,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.4,
        ease: "power3.out",
      }
    );

    prevPathnameRef.current = pathname;
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div ref={contentRef} className="relative w-full min-h-screen opacity-0">
        {children}
      </div>
    </div>
  );
}
