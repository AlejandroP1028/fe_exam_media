import React from "react";
import { ArticleCardProps } from "@/lib/types";
import ArticleHeader from "./ArticleHeader";
const ArticleCard = ({ header, images, details }: ArticleCardProps) => {
  return (
    <div className="w-full rounded-[12px] sm:w-[1440px]  border border-[#D5D5CE66] bg-[#FFFFFF] px-4 pt-4 drop-shadow-article">
      <ArticleHeader
        rank={header.rank}
        title={header.title}
        metrics={header.metrics}
      />
    </div>
  );
};

export default ArticleCard;
