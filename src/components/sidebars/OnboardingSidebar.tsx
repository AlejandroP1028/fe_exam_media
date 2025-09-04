"use client";

import type React from "react";
import { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconUserCog,
  IconHash,
  IconSpeakerphone,
  IconBallpen,
  IconFileText,
} from "@tabler/icons-react";
import gsap from "gsap";
import LogoMorph from "@/components/custom/LogoMorph";

interface SidebarLink {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  url: string;
}

interface CustomSidebarProps {
  className?: string;
}

export function CustomSidebar({ className = "" }: CustomSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const footerTextRef = useRef<HTMLParagraphElement>(null);
  const baseUrl = "/onboarding";
  const sidebarLinks: SidebarLink[] = [
    {
      title: "Account",
      icon: IconUserCog,
      url: `${baseUrl}/account_information`,
    },
    {
      title: "Keywords",
      icon: IconHash,
      url: `${baseUrl}/keywords`,
    },
    {
      title: "Sources",
      icon: IconSpeakerphone,
      url: `${baseUrl}/sources`,
    },
    {
      title: "Publishers",
      icon: IconBallpen,
      url: `${baseUrl}/publishers`,
    },
    {
      title: "Review",
      icon: IconFileText,
      url: `${baseUrl}/review`,
    },
  ];

  useLayoutEffect(() => {
    const allTextElements = [
      ...textRefs.current.filter(Boolean),
      footerTextRef.current,
    ].filter(Boolean);

    if (isExpanded) {
      gsap.fromTo(
        allTextElements,
        {
          opacity: 0,
          x: -20,
          scale: 0.9,
          rotationY: -15,
        },
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

  return (
    <div
      className={`
        fixed left-0 top-0 h-full
        transition-all duration-300 ease-in-out z-50
        font-sans
        ${isExpanded ? "w-40" : "w-16"}
        ${className}
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Header */}
      <div className="flex items-center h-16 px-4">
        <div className="flex items-center space-x-3">
          <LogoMorph expanded={isExpanded} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="px-3">
          {sidebarLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = pathname === link.url;

            return (
              <li key={link.title}>
                <Link
                  href={link.url}
                  className={`
                    flex items-center rounded-lg

                    transition-all duration-200 group
                    ${
                      isActive
                        ? "bg-[#F0EEE6] text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }
                  `}
                >
                  <div className="flex items-center justify-center w-10 h-10 flex-shrink-0">
                    <Icon
                      size={20}
                      className={`
                        transition-colors duration-200
                        ${isActive ? "text-sidebar-primary" : "text-[#3D3D3A]"}
                      `}
                    />
                  </div>
                  <span
                    ref={(el) => {
                      textRefs.current[index] = el;
                    }}
                    className={`
                       "ml-[12px] overflow-hidden whitespace-nowrap opacity-0"
                        ${
                          isActive
                            ? "font-bold text-[#121212]"
                            : "text-[#3D3D3A]"
                        }
                      `}
                  >
                    {link.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
