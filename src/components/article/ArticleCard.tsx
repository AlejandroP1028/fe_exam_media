import type { ArticleCardProps } from "@/lib/types";
import ArticleHeader from "./ArticleHeader";
import ArticleImage from "./ArticleImage";
import ArticleDetails from "./ArticleDetails";
import ArticleFooter from "./ArticleFooter";

const ArticleCard = ({ header, images, details, footer }: ArticleCardProps) => {
  return (
    <div
      className="
        w-full sm:max-w-[1440px] 
        rounded-[12px] border border-[#D5D5CE66] 
        bg-white drop-shadow-article 
        mx-auto 
        overflow-hidden
      "
    >
      <ArticleHeader
        rank={header.rank}
        title={header.title}
        metrics={header.metrics}
      />
      <ArticleImage images={images} />
      <ArticleDetails
        story={details.story}
        whyItMatters={details.whyItMatters}
        whoImportant={details.whoImportant}
        biggerPicture={details.biggerPicture}
      />
      <ArticleFooter
        whoImportant={footer.whoImportant}
        whatNext={footer.whatNext}
        biggerPicture={footer.biggerPicture}
      />
    </div>
  );
};

export default ArticleCard;
