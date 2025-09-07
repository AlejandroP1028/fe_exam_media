import { useState } from "react";
import { KeywordTag } from "@/lib/types";
export function useKeywords() {
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

  return {
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
  };
}
