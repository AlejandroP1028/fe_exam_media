"use client";

import Link from "next/link";
import type React from "react";
import { IconCheck } from "@tabler/icons-react";

interface SidebarItemProps {
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  url: string;
  isActive: boolean;
  completed: boolean;
  refCallback: (el: HTMLSpanElement | null) => void;
}

export function SidebarItem({
  title,
  Icon,
  url,
  isActive,
  completed,
  refCallback,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={url}
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
          {completed ? (
            <IconCheck
              size={20}
              className="text-green-600 transition-colors duration-200"
            />
          ) : (
            <Icon
              size={20}
              className={`transition-colors duration-200 ${
                isActive ? "text-sidebar-primary" : "text-[#3D3D3A]"
              }`}
            />
          )}
        </div>
        <span
          ref={refCallback}
          className={`
            ml-[12px] overflow-hidden whitespace-nowrap opacity-0
            ${isActive ? "font-bold text-[#121212]" : "text-[#3D3D3A]"}
          `}
        >
          {title}
        </span>
      </Link>
    </li>
  );
}
