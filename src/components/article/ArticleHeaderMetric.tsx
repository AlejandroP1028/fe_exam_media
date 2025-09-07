import React from "react";
import { ArticleMetric } from "@/lib/types";
import { borderStyle } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
const ArticleHeaderMetric = ({
  label,
  score,
  border,
  flex = 60,
}: ArticleMetric) => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`col-span-1 flex flex-col px-2.5 ${
        !isMobile && borderStyle(border)
      }`}
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
