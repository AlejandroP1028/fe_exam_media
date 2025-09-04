"use client";

import { useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);
interface LogoMorphProps {
  expanded: boolean; // controlled by parent
}
export default function LogoMorph({ expanded }: LogoMorphProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  useLayoutEffect(() => {
    if (!svgRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        paused: true,
      });
      tlRef.current = tl;
      tl.set("#coup-letters path", { opacity: 0, y: -10 });

      tl.to("#logo-bg", { duration: 0.2, morphSVG: "#bg-shape" }, 0)
        .to("#logo-outline", { duration: 0.2, morphSVG: "#border-outline" }, 0)
        .to("#logo-side", { duration: 0.2, morphSVG: "#left-extension" }, 0)
        .to("#logo-bottom", { duration: 0.2, morphSVG: "#bottom-bar" }, 0)
        .to("#logo-glyph", { duration: 0.2, morphSVG: "#letter-s" }, 0)
        .to(
          "#coup-letters path",
          {
            opacity: 1,
            y: 0,
            duration: 0.1,
            stagger: 0.05,
            ease: "power1.out",
          },
          "-=0.15"
        );
    }, svgRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!tlRef.current) return;
    if (expanded) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [expanded]);

  return (
    <svg
      ref={svgRef}
      width="62"
      height="32"
      viewBox="0 0 62 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* -------------------- VISIBLE: initial (small) logo that will morph -------------------- */}
      <g id="initial-logo">
        <path
          id="logo-bg"
          d="M10.807 20.5374H5.14824V0H29.6V20.5354H17.6548L10.807 26.9553V20.5374Z"
          fill="#FFBA49"
        />
        <path
          id="logo-outline"
          d="M29.5998 0V20.5352H17.6545L10.8068 26.9555V20.5375H5.14824V0H29.5998ZM11.8771 24.4852L17.2318 19.4656H28.5303V1.07031H6.21855V19.4672H11.8771V24.4852Z"
          fill="#121212"
        />
        <path
          id="logo-side"
          d="M5.1483 20.5374H10.807V26.9553L5.65872 32V25.5821H0V5.04471L5.1483 0V20.5374Z"
          fill="#121212"
        />
        <path
          id="logo-bottom"
          d="M12.2631 25.5795H24.4517L29.6 20.5348H17.6548L12.2631 25.5795Z"
          fill="#121212"
        />
        {/* This S glyph morphs into the big S */}
        <path
          id="logo-glyph"
          d="M19.0967 8.45182C19.0004 7.49555 18.7694 6.25688 17.0044 6.25688C15.708 6.25688 15.0855 6.90509 15.0855 7.78435C15.0855 10.4478 21.2403 7.7651 21.2403 12.5914C21.2403 14.8313 19.501 16.1662 17.0044 16.1662C13.8853 16.1662 12.5696 14.2344 12.8328 12.3796H14.8801C14.9635 13.6311 15.124 14.7029 17.075 14.7029C18.6667 14.7029 19.2186 13.9263 19.2186 13.0792C19.2186 10.2681 13.051 12.8674 13.051 8.04749C13.051 6.19912 14.5913 4.8 16.9659 4.8C19.9695 4.8 21.221 6.35957 21.0606 8.45182H19.1095H19.0967Z"
          fill="#121212"
        />
      </g>

      {/* -------------------- HIDDEN: morph targets (they don't render) -------------------- */}
      <defs>
        <path
          id="bg-shape"
          d="M5.04453 0H61.6V20.5375H21.7312L16.6881 25.5806L15.3133 26.9554V20.5375H5.04453V0Z"
        />
        <path
          id="border-outline"
          d="M61.6 0V20.5375H21.7312L15.3133 26.9554V20.5375H5.04453V0H61.6ZM16.0836 25.0961L21.4125 19.7672H60.8297V0.770312H5.81484V19.7672H16.0836V25.0961Z"
        />
        <path
          id="left-extension"
          d="M5.04452 20.5375H15.3133V26.9555L10.2687 32V25.5821H5.13437H0V5.04458L5.04452 6.10352e-05V20.5375Z"
        />
        <path
          id="bottom-bar"
          d="M61.5969 20.5375L56.56 25.582H16.6802L21.7311 20.5375H61.5969Z"
        />
        <path
          id="letter-s"
          d="M16.514 8.24069C16.4177 7.28441 16.1867 6.04574 14.4217 6.04574C13.1253 6.04574 12.5028 6.69396 12.5028 7.57322C12.5028 10.2367 18.6576 7.55396 18.6576 12.3803C18.6576 14.6201 16.9183 15.9551 14.4217 15.9551C11.3026 15.9551 9.98691 14.0233 10.25 12.1685H12.2974C12.3808 13.42 12.5413 14.4918 14.4923 14.4918C16.084 14.4918 16.6359 13.7152 16.6359 12.868C16.6359 10.057 10.4683 12.6562 10.4683 7.83635C10.4683 5.98798 12.0086 4.58887 14.3832 4.58887C17.3868 4.58887 18.6383 6.14843 18.4779 8.24069H16.5268H16.514Z"
        />
      </defs>

      {/* -------------------- VISIBLE: COUP letters (start hidden; fade in after morph) -------------------- */}
      <g id="coup-letters" fill="#121212">
        <path
          id="letter-c"
          opacity="0"
          d="M29.0162 11.2186C28.9007 14.0939 27.0331 15.9615 24.2605 15.9615C21.6612 15.9615 19.37 14.0425 19.37 10.2752C19.37 6.50784 21.5329 4.58887 24.2605 4.58887C26.9881 4.58887 28.7723 6.29604 29.0162 9.44726H26.8405C26.6608 7.3871 25.6083 6.52709 24.1771 6.52709C22.4891 6.52709 21.3853 7.7465 21.3853 10.2752C21.3853 12.8039 22.5084 14.0233 24.1771 14.0233C25.6211 14.0233 26.3399 13.3109 26.9881 11.2122H29.0162V11.2186Z"
        />
        <path
          id="letter-o"
          opacity="0"
          d="M29.6066 10.2752C29.6066 6.78381 31.7695 4.58887 34.51 4.58887C37.2504 4.58887 39.4454 6.78381 39.4454 10.2752C39.4454 13.7666 37.2504 15.9615 34.51 15.9615C31.7695 15.9615 29.6066 13.7666 29.6066 10.2752ZM37.4173 10.2752C37.4173 7.91979 36.2171 6.52709 34.51 6.52709C32.8028 6.52709 31.6219 7.92621 31.6219 10.2752C31.6219 12.6242 32.8092 14.0233 34.51 14.0233C36.2107 14.0233 37.4173 12.6242 37.4173 10.2752Z"
        />
        <path
          id="letter-u"
          opacity="0"
          d="M48.0583 12.5792C48.0583 14.5752 46.4666 15.9551 44.1626 15.9551C41.6917 15.9551 40.3311 14.3442 40.3311 12.4124V4.74931H42.25V12.3033C42.25 13.3109 42.8854 14.0104 44.1818 14.0104C45.3178 14.0104 46.1329 13.5098 46.1329 12.5022V4.75573H48.0647V12.5856L48.0583 12.5792Z"
        />
        <path
          id="letter-p"
          opacity="0"
          d="M49.1814 4.75577H52.8846C55.2849 4.75577 56.4273 5.97518 56.4273 7.99042C56.4273 10.0057 55.2721 11.2379 52.9038 11.2379H51.1197V14.8576C51.1197 15.2491 51.1389 15.57 51.2159 15.8011H49.1878V4.75577H49.1814ZM51.1132 6.58489V9.39595H52.8332C53.9371 9.39595 54.4056 8.8761 54.4056 7.984C54.4056 7.0919 53.8345 6.58489 52.8782 6.58489H51.1068H51.1132Z"
        />
      </g>
    </svg>
  );
}
