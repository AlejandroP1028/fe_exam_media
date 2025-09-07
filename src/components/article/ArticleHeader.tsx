import type { ArticleHeaderProps } from "@/lib/types";
import type { ArticleMetric } from "@/lib/types";
import ArticleHeaderMetric from "./ArticleHeaderMetric";
import { formatNumber } from "@/lib/utils";

const ArticleHeader = ({ rank, title, metrics }: ArticleHeaderProps) => {
  const articleMetrics: ArticleMetric[] = [
    {
      label: "Engagement Score",
      score: metrics.engagementScore,
      border: "right",
      flex: 1.7,
    },
    { label: "Velocity", score: metrics.velocity, border: "right", flex: 1 },
    {
      label: "Comments",
      score: formatNumber(metrics.comments),
      border: "right",
      flex: 1,
    },
    {
      label: "Shares",
      score: formatNumber(metrics.shares),
      border: "right",
      flex: 1,
    },
    { label: "Articles", score: metrics.articles, border: "right", flex: 1 },
    {
      label: "Est. Traffic",
      score: formatNumber(metrics.estimatedTraffic),
      border: "none",
      flex: 2,
    },
  ];

  return (
    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-start px-4 pt-4">
      <div className="flex flex-row space-x-4">
        <span className="w-8 h-8 flex bg-[#FEF3C7] text-[#B45309] font-semibold font-inter-sans leading-[15.6px] rounded-full items-center justify-center flex-shrink-0 mt-1">
          {rank}
        </span>
        <span className="font-sans font-semibold text-lg sm:text-2xl tracking-tight leading-[120%] text-text-primary sm:w-162">
          {title}
        </span>
      </div>

      <div className="grid grid-cols-3 sm:flex sm:flex-row text-sm font-sans w-full">
        {articleMetrics.map((articleMetric, i) => (
          <ArticleHeaderMetric
            flex={articleMetric.flex}
            border={articleMetric.border}
            key={`${articleMetric.label}-${i}`}
            label={articleMetric.label}
            score={articleMetric.score}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleHeader;
