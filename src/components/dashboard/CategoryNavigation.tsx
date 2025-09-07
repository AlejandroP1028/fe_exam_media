"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface ScrollableTabsProps {
  items: string[];
  onSelect?: (index: number, value: string) => void;
}

const ScrollableTabs: React.FC<ScrollableTabsProps> = ({ items, onSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    checkScroll();
    const scroller = scrollRef.current;
    scroller?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      scroller?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const amount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    if (onSelect) onSelect(index, items[index]);
  };

  return (
    <div className="relative w-full h-[40px]">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-2"
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`
                h-[40px]
              whitespace-nowrap rounded-md px-4 py-2 text-sm font-mono font-medium leading-[16px] 
              transition-colors duration-200
              ${
                activeIndex === index
                  ? "bg-[#121212] text-[#FFFFFF]"
                  : "bg-[#F0EEE6] text-[#141413] hover:bg-gray-200"
              }
            `}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Fade effects */}
      {canScrollLeft && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-14 sm:w-58 bg-gradient-to-r from-background via-background/90 to-transparent" />
      )}
      {canScrollRight && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-14 sm:w-58 bg-gradient-to-l from-background via-background/90 to-transparent" />
      )}

      {/* Scroll arrows */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white shadow p-1"
        >
          <ChevronRight size={16} />
        </button>
      )}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white shadow p-1"
        >
          <ChevronLeft size={16} />
        </button>
      )}
    </div>
  );
};

export default ScrollableTabs;
