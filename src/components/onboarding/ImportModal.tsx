"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { FileUploadArea } from "./FileUploadArea";
import { UploadedFileDisplay } from "./UploadedFileDisplay";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "@/components/custom/Button"; // ✅ use your custom button

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  uploadedFile: File | null;
  onFileSelect: (file: File) => void;
  onFileRemove: () => void;
  onImport: () => void;
}

export function ImportModal({
  isOpen,
  onClose,
  uploadedFile,
  onFileSelect,
  onFileRemove,
  onImport,
}: ImportModalProps) {
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleClose = () => {
    onClose();
    onFileRemove();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md  font-sans">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">
            Import CSV/Excel File
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <FileUploadArea
            onFileSelect={onFileSelect}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />

          <AnimatePresence>
            {uploadedFile && (
              <motion.div
                key="uploaded-file"
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <UploadedFileDisplay
                  file={uploadedFile}
                  onRemove={onFileRemove}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Template Links */}
          <div className="font-body text-xs tracking-tight  text-underline text-[#2563EB]">
            <p>
              •{" "}
              <button className="underline">
                Download a sample .xls template
              </button>
            </p>
            <p>
              •{" "}
              <button className="underline">
                Download a sample .csv template
              </button>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <CustomButton
              text="CANCEL"
              onClick={handleClose}
              height="32px"
              className="bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-gray-800"
            />
            <CustomButton
              text="IMPORT"
              onClick={onImport}
              height="32px"
              disabled={!uploadedFile}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
