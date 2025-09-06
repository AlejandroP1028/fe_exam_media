import React from "react";
import { ArticleMetric } from "@/lib/types";
const ArticleHeaderMetric = ({
  label,
  score,
  border,
  flex = 60,
}: ArticleMetric) => {
  const borderStyle = (position: "right" | "left" | "none") => {
    switch (position) {
      case "right":
        return "border-r border-gray-200";
      case "left":
        return "border-l border-gray-200";
      default:
        return "";
    }
  };

  return (
    <div
      className={`flex flex-col px-2.5 ${borderStyle(border)}`}
      style={{ flex }}
    >
      <span className="leading-1.4 font-semibold text-xs text-text-secondary">
        {label}
      </span>
      <span className="font-semibold text-2xl tracking-tight">{score}</span>
    </div>
  );
};

export default ArticleHeaderMetric;
