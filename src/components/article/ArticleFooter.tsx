"use client";

import React, { useState } from "react";
import { ArticleFooterProps, Section } from "@/lib/types";
import { borderStyle } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { IconChevronRight, IconChevronDown } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const ArticleFooter = ({
  whoImportant,
  biggerPicture,
  whatNext,
}: ArticleFooterProps) => {
  const [expanded, setExpanded] = useState(false);

  const sections: Section[] = [
    {
      label: "WHO IS THIS IMPORTANT TO",
      content: whoImportant,
      border: "right",
    },
    {
      label: "WHAT'S NEXT",
      content: whatNext,
      border: "right",
    },
    {
      label: "THE BIGGER PICTURE",
      content: biggerPicture,
      border: "none",
    },
  ];

  return (
    <div className="w-full border-y border-[#D5D5CE66]">
      {/* Expand/Collapse button */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 items-start px-15.5">
              {sections.map((section) => (
                <div
                  key={section.label}
                  className={`p-5 flex flex-col space-y-2 items-center text-text-primary ${borderStyle(
                    section.border
                  )}`}
                >
                  <div className="flex flex-row font-mono text-sm font-semibold w-full leading-[16px] uppercase">
                    {section.label}{" "}
                    <IconChevronRight className="ml-2" size={12} />
                  </div>
                  <div className="font-sans text-xs leading-[180%]">
                    <ReactMarkdown>{section.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="space-x-2 py-2 flex flex-row font-mono text-sm leading-[16px] text-text-primary w-full items-center justify-center"
      >
        {expanded ? "HIDE DETAILS" : "SHOW MORE DETAILS"}
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IconChevronDown size={20} />
        </motion.div>
      </button>

      {/* Expandable Section */}
    </div>
  );
};

export default ArticleFooter;
