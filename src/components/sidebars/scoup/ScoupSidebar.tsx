"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconLayoutBoard,
  IconSpeakerphone,
  IconBallpen,
  IconFileText,
  IconRocket,
  IconMenu,
} from "@tabler/icons-react";
import Image from "next/image";

import { SidebarItem } from "@/components/sidebars/SidebarItem";
import { useSidebar } from "@/hooks/useSidebar";
import LogoMorph from "@/components/custom/LogoMorph";

interface SidebarLink {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  url: string;
  completed?: boolean;
}

interface CustomSidebarProps {
  className?: string;
}

export function CustomSidebar({ className = "" }: CustomSidebarProps) {
  const {
    isExpanded,
    setIsExpanded,
    textRefs,
    handleMouseEnter,
    handleMouseLeave,
  } = useSidebar();

  const pathname = usePathname();
  const baseUrl = "/scoup";

  const sidebarLinks: SidebarLink[] = [
    {
      title: "Dashboard",
      icon: IconLayoutBoard,
      url: `${baseUrl}/dashboard`,
    },
    {
      title: "Publishers",
      icon: IconBallpen,
      url: `${baseUrl}/publishers`,
    },
    {
      title: "Sources",
      icon: IconSpeakerphone,
      url: `${baseUrl}/sources`,
    },
    {
      title: "Persona",
      icon: IconFileText,
      url: `${baseUrl}/review`,
    },
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
          fixed md:relative left-0 top-0 h-screen
          transition-all duration-300 ease-in-out z-50 font-sans
          ${isExpanded ? "w-64" : "w-16"}
          ${className}
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
        <nav className="flex-1 overflow-y-auto">
          <ul className="px-3 space-y-1">
            {sidebarLinks.map((link, index) => (
              <SidebarItem
                key={link.title}
                title={link.title}
                Icon={link.icon}
                url={link.url}
                isActive={pathname === link.url}
                completed={!!link.completed}
                refCallback={(el) => (textRefs.current[index] = el)}
              />
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <footer className="mt-auto fixed bottom-0 py-3 px-3 font-sans text-[#3D3D3A] space-y-2 border-t w-full">
          {/* Release Notes */}
          <Link
            href="/profile"
            className="flex items-center rounded-lg transition-all duration-200 group hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <div className="flex items-center justify-center w-10 h-10 flex-shrink-0">
              <IconRocket size={20} className="text-sidebar-primary" />
            </div>
            <span
              className={`ml-[12px] whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isExpanded ? "opacity-100 max-w-xs" : "opacity-0 max-w-0"
              }`}
            >
              Release Notes
            </span>
          </Link>

          <Link
            href="/profile"
            className="flex items-center rounded-lg transition-all duration-200 group"
          >
            <div className="flex items-center justify-center w-10 h-10 flex-shrink-0">
              <Image
                width={32}
                height={32}
                src="/Avatar.svg"
                alt="User avatar"
              />
            </div>
            <span
              className={`ml-[12px] whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isExpanded ? "opacity-100 max-w-xs" : "opacity-0 max-w-0"
              }`}
            >
              Maricel Alonzo
            </span>
          </Link>
        </footer>
      </div>
    </>
  );
}
