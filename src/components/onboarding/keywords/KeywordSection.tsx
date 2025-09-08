"use client";

import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface KeywordTag {
  id: string;
  text: string;
}

interface KeywordSectionProps {
  title: string;
  keywords: KeywordTag[];
  placeholder: string;
  inputValue: string;
  onInputChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onRemove: (id: string) => void;
  badgeClass: string;
}

export function KeywordSection({
  title,
  keywords,
  placeholder,
  inputValue,
  onInputChange,
  onKeyPress,
  onRemove,
  badgeClass,
}: KeywordSectionProps) {
  return (
    <div className="flex flex-col space-y-2 mb-8 w-full">
      <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {keywords.map((keyword) => (
            <motion.button
              key={keyword.id}
              onClick={() => onRemove(keyword.id)}
              className={badgeClass}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              layout
            >
              {keyword.text}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyPress={onKeyPress}
        className="text-gray-500 font-mono border-none shadow-none w-full"
      />
    </div>
  );
}
