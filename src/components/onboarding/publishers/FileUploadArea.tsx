"use client";

import type React from "react";

import { IconCloudUpload } from "@tabler/icons-react";

interface FileUploadAreaProps {
  onFileSelect: (file: File) => void;
  onDragOver: (event: React.DragEvent) => void;
  onDrop: (event: React.DragEvent) => void;
}

export function FileUploadArea({
  onFileSelect,
  onDragOver,
  onDrop,
}: FileUploadAreaProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div
      className="border bg-white border-[#1F1E1D26] rounded-lg p-8 text-center "
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <IconCloudUpload className="mx-auto h-11 w-11 mb-3" stroke={1} />
      <div>
        <p className="text-sm font-medium">
          <label
            htmlFor="file-upload"
            className="cursor-pointer text-[#141413] font-bold hover:text-gray-700"
          >
            Click to import
          </label>
          <span className="text-[#73726C]"> or drag and drop</span>
        </p>
        <p className="text-xs text-[#73726C]">
          Excel (.xls, .xlsx) or CSV (.csv) files (max. 10MB)
        </p>
      </div>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        accept=".csv,.xls,.xlsx"
        onChange={handleFileUpload}
      />
    </div>
  );
}
