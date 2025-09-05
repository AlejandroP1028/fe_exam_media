"use client";

import { Check, X } from "lucide-react";

interface UploadedFileDisplayProps {
  file: File;
  onRemove: () => void;
}

export function UploadedFileDisplay({
  file,
  onRemove,
}: UploadedFileDisplayProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-green-500 rounded-full p-1">
          <Check className="h-3 w-3 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-green-900">{file.name}</p>
          <p className="text-xs text-green-700">
            {(file.size / 1024).toFixed(2)} KB
          </p>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="text-green-600 hover:text-green-800"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
