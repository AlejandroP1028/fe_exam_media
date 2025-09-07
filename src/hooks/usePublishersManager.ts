"use client";
import { useState, useEffect } from "react";
import type { PublisherRow } from "@/lib/types";

export function usePublishersManager(initialRowCount = 1) {
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [data, setData] = useState<PublisherRow[]>([]);
  const [rowCount, setRowCount] = useState(initialRowCount);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(data.length === 0);
  }, [data]);

  const handleFileSelect = (file: File) => setUploadedFile(file);
  const handleFileRemove = () => setUploadedFile(null);

  const handleImport = () => {
    if (!uploadedFile) return;
    const newData: PublisherRow[] = Array.from(
      { length: rowCount },
      (_, i) => ({
        id: i + 1,
        website: "https://inquirer.ph/",
        publication: "Philippine Daily Inquirer",
      })
    );
    setData(newData);
    setUploadedFile(null);
    setIsImportModalOpen(false);
  };

  const handleRowCountChange = (value: number) =>
    setRowCount(Math.max(1, value || 1));

  return {
    isImportModalOpen,
    setIsImportModalOpen,
    uploadedFile,
    data,
    rowCount,
    disabled,
    handleFileSelect,
    handleFileRemove,
    handleImport,
    handleRowCountChange,
  };
}
