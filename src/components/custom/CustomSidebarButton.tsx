"use client";

import type React from "react";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface CustomProps {
  icon?: React.FC<React.ComponentProps<"svg">>; // Tabler icons
  title: string;
  url: string;
  badge?: string | number; // Optional badge for notifications
}

const CustomSidebarButton = ({
  icon: Icon,
  title,
  url,
  badge,
}: CustomProps) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <SidebarMenuButton
      className={cn(
        "h-10 p-0 transition-all duration-200 hover:bg-accent/50",
        isActive && "bg-accent text-accent-foreground"
      )}
      asChild
    >
      <Link
        href={url}
        className="flex items-center gap-3 px-3 py-2 w-full h-[40px] rounded-md group"
        aria-label={title}
      >
        {Icon && (
          <Icon
            className={cn(
              "w-24 h-24 transition-colors duration-200",
              isActive
                ? "text-accent-foreground"
                : "text-muted-foreground group-hover:text-foreground"
            )}
          />
        )}
        <span
          className={cn(
            "font-medium transition-colors duration-200 flex-1 text-left",
            isActive
              ? "text-accent-foreground"
              : "text-foreground group-hover:text-foreground"
          )}
        >
          {title}
        </span>
        {badge && (
          <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full min-w-[20px] text-center">
            {badge}
          </span>
        )}
      </Link>
    </SidebarMenuButton>
  );
};

export default CustomSidebarButton;
