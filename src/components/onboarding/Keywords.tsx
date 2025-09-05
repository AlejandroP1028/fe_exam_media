"use client";

import { useState } from "react";
import { KeywordSection } from "./KeywordSection";

interface KeywordTag {
  id: string;
  text: string;
}

export default function KeywordsManager() {
  const [mainKeywords, setMainKeywords] = useState<KeywordTag[]>([]);
  const [additionalKeywords, setAdditionalKeywords] = useState<KeywordTag[]>(
    []
  );
  const [excludedKeywords, setExcludedKeywords] = useState<KeywordTag[]>([]);

  const [mainInput, setMainInput] = useState("");
  const [additionalInput, setAdditionalInput] = useState("");
  const [excludedInput, setExcludedInput] = useState("");

  const removeKeyword = (
    id: string,
    type: "main" | "additional" | "excluded"
  ) => {
    if (type === "main")
      setMainKeywords((prev) => prev.filter((k) => k.id !== id));
    if (type === "additional")
      setAdditionalKeywords((prev) => prev.filter((k) => k.id !== id));
    if (type === "excluded")
      setExcludedKeywords((prev) => prev.filter((k) => k.id !== id));
  };

  const addKeyword = (
    text: string,
    type: "main" | "additional" | "excluded"
  ) => {
    if (!text.trim()) return;
    const newKeyword: KeywordTag = {
      id: Date.now().toString(),
      text: text.trim().toUpperCase(),
    };

    if (type === "main") {
      setMainKeywords((prev) => [...prev, newKeyword]);
      setMainInput("");
    }
    if (type === "additional") {
      setAdditionalKeywords((prev) => [...prev, newKeyword]);
      setAdditionalInput("");
    }
    if (type === "excluded") {
      setExcludedKeywords((prev) => [...prev, newKeyword]);
      setExcludedInput("");
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent,
    text: string,
    type: "main" | "additional" | "excluded"
  ) => {
    if (e.key === "Enter") addKeyword(text, type);
  };

  return (
    <div className="w-[860px] h-screen bg-white font-sans px-6 py-4 rounded-2xl">
      <div className="text-md">Keywords Preview</div>

      <div className="p-10">
        <KeywordSection
          title="Main Keywords"
          keywords={mainKeywords}
          placeholder="Add main keywords here and press enter"
          inputValue={mainInput}
          onInputChange={setMainInput}
          onKeyPress={(e) => handleKeyPress(e, mainInput, "main")}
          onRemove={(id) => removeKeyword(id, "main")}
          badgeClass="inline-flex text-sm cursor-pointer font-mono items-center gap-1 bg-[#EFF6FF] text-[#001799] px-2 py-1 rounded-[20px] font-medium"
        />

        <KeywordSection
          title="Additional Keywords"
          keywords={additionalKeywords}
          placeholder="Add additional keywords here and press enter"
          inputValue={additionalInput}
          onInputChange={setAdditionalInput}
          onKeyPress={(e) => handleKeyPress(e, additionalInput, "additional")}
          onRemove={(id) => removeKeyword(id, "additional")}
          badgeClass="inline-flex cursor-pointer text-sm font-mono items-center gap-1 bg-[#EBFFEE] text-[#009951] px-2 py-1 rounded-[20px] font-medium"
        />

        <KeywordSection
          title="Excluded Keywords"
          keywords={excludedKeywords}
          placeholder="Add excluded keywords here and press enter"
          inputValue={excludedInput}
          onInputChange={setExcludedInput}
          onKeyPress={(e) => handleKeyPress(e, excludedInput, "excluded")}
          onRemove={(id) => removeKeyword(id, "excluded")}
          badgeClass="inline-flex cursor-pointer text-sm font-mono items-center gap-1 bg-[#FEE9E7] text-[#C00F0C] px-2 py-1 rounded-[20px] font-medium"
        />
      </div>
    </div>
  );
}
