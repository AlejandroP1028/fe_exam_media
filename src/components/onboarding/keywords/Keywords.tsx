"use client";

import { KeywordSection } from "./KeywordSection";
import { useKeywords } from "@/hooks/useKeywords";

export default function KeywordsManager() {
  const {
    mainKeywords,
    additionalKeywords,
    excludedKeywords,
    mainInput,
    additionalInput,
    excludedInput,
    setMainInput,
    setAdditionalInput,
    setExcludedInput,
    removeKeyword,
    handleKeyPress,
  } = useKeywords();

  return (
    <div className="w-full max-w-[860px] h-screen bg-white font-sans px-4 sm:px-6 py-4 rounded-2xl overflow-auto">
      <h1 className="text-lg font-semibold mb-4">Keywords Preview</h1>

      <div className="space-y-6">
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
