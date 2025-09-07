"use client";

import { useState, useEffect } from "react";
import type { SocialMediaRow } from "@/lib/types";

export function useSourcesManager(initialRowCount = 1) {
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [data, setData] = useState<SocialMediaRow[]>([]);
  const [rowCount, setRowCount] = useState(initialRowCount);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(data.length === 0);
  }, [data]);

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  const handleImport = () => {
    if (!uploadedFile) return;

    // Simulate importing rows
    const newData: SocialMediaRow[] = Array.from(
      { length: rowCount },
      (_, i) => ({
        id: i + 1,
        twitter: "https://x.com/thinkingpinoyph",
        facebook: "https://facebook.com/startuphustle",
        reddit: "https://reddit.com/u/phpoliticsdaily",
        youtube: "https://youtube.com/PBSNewsHour",
      })
    );

    setData(newData);
    setIsImportModalOpen(false);
    setUploadedFile(null);
  };

  const handleRowCountChange = (value: number) => {
    setRowCount(Math.max(1, value));
  };

  return {
    isImportModalOpen,
    setIsImportModalOpen,
    uploadedFile,
    handleFileSelect,
    handleFileRemove,
    data,
    setData,
    rowCount,
    setRowCount,
    handleRowCountChange,
    disabled,
    handleImport,
  };
}
