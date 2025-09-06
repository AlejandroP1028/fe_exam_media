import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
};

export const borderStyle = (position: "right" | "left" | "none") => {
  switch (position) {
    case "right":
      return "border-r border-gray-200";
    case "left":
      return "border-l border-gray-200";
    default:
      return "";
  }
};
