import React from "react";
import { ArticleDetailsProps } from "@/lib/types";
import { IconChevronRight } from "@tabler/icons-react";
import { borderStyle } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Section } from "@/lib/types";

const ArticleDetails = ({
  story,
  whyItMatters,
  whoImportant,
  biggerPicture,
}: ArticleDetailsProps) => {
  const sections: Section[] = [
    {
      label: "The Story",
      content: story,
      border: "right",
    },
    {
      label: "WHY IT MATTERS TO YOU",
      content: whyItMatters,
      border: "right",
    },
    {
      label: "WHO IS THIS IMPORTANT TO",
      content: whoImportant,
      border: "right",
    },
    {
      label: "THE BIGGER PICTURE",
      content: biggerPicture,
      border: "none",
    },
  ];

  return (
    <div className="w-full px-15.5 border-y border-[#D5D5CE66]">
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {sections.map((section) => (
          <div
            key={section.label}
            className={`p-5 flex flex-col space-y-2 items-center text-text-primary ${borderStyle(
              section.border
            )}`}
          >
            <div className="flex flex-row font-mono text-sm w-full leading-[16px] uppercase">
              {section.label} <IconChevronRight className="ml-2" size={12} />
            </div>
            <div className="font-sans text-xs leading-[180%] h-[240px] overflow-hidden text-ellipsis">
              <ReactMarkdown>{section.content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetails;
