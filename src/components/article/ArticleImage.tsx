"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import type { ArticleImagesProps } from "@/lib/types";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const ArticleImage: React.FC<ArticleImagesProps> = ({ images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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

  return (
    <div className="relative w-full h-[100px] sm:h-[116px] px-4 sm:px-17 mt-4 sm:mt-6 mb-4">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-2 px-2 sm:px-4"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[140px] sm:w-[160px] h-[100px] sm:h-[116px] flex-shrink-0 relative"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 640px) 140px, 160px"
            />
          </div>
        ))}
      </div>

      {canScrollLeft && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 sm:w-52 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
      )}
      {canScrollRight && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 sm:w-52 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
      )}

      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 sm:left-10 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white hover:bg-black/60 p-2 z-20 transition min-w-[36px] min-h-[36px] flex items-center justify-center"
        >
          <IconChevronLeft size={16} />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 sm:right-10 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white hover:bg-black/60 p-2 z-20 transition min-w-[36px] min-h-[36px] flex items-center justify-center"
        >
          <IconChevronRight size={16} />
        </button>
      )}
    </div>
  );
};

export default ArticleImage;
