"use client";

import type React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { usePathname } from "next/navigation";
import {
  IconUserCog,
  IconMenu,
  IconHash,
  IconSpeakerphone,
  IconBallpen,
  IconFileText,
} from "@tabler/icons-react";
import LogoMorph from "@/components/custom/LogoMorph";
import { useSidebar } from "@/hooks/useSidebar";
import { SidebarItem } from "./SidebarItem";

interface SidebarLink {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  url: string;
}

interface CustomSidebarProps {
  className?: string;
}

export function CustomSidebar({ className = "" }: CustomSidebarProps) {
  const {
    isExpanded,
    setIsExpanded,
    textRefs,
    footerTextRef,
    handleMouseEnter,
    handleMouseLeave,
  } = useSidebar();
  const pathname = usePathname();
  const stepsFinished = useSelector(
    (state: RootState) => state.onboarding.stepsFinished
  );

  const baseUrl = "/onboarding";

  const sidebarLinks: SidebarLink[] = [
    {
      title: "Account",
      icon: IconUserCog,
      url: `${baseUrl}/account_information`,
    },
    { title: "Keywords", icon: IconHash, url: `${baseUrl}/keywords` },
    { title: "Sources", icon: IconSpeakerphone, url: `${baseUrl}/sources` },
    { title: "Publishers", icon: IconBallpen, url: `${baseUrl}/publishers` },
    { title: "Review", icon: IconFileText, url: `${baseUrl}/review` },
  ];

  return (
    <>
      {/* Mobile Toggle Bar */}
      <div className="md:hidden flex items-center justify-between px-4 h-16 bg-background">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-md focus:outline-none focus:ring"
        >
          <IconMenu size={24} />
        </button>
      </div>

      {/* Mobile overlay */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          left-0 top-0 h-screen
          transition-all duration-300 ease-in-out z-50
          font-sans
          ${isExpanded ? "w-64" : "w-16"}
          ${className}
          fixed md:relative
          md:hover:w-40
          bg-white md:bg-transparent
          ${isExpanded ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
            {sidebarLinks.map((link, index) => (
              <SidebarItem
                key={link.title}
                title={link.title}
                Icon={link.icon}
                url={link.url}
                isActive={pathname === link.url}
                completed={stepsFinished[index]}
                refCallback={(el) => (textRefs.current[index] = el)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
