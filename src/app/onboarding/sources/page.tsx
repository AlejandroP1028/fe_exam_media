"use client";

import React from "react";
import Link from "next/link";
import { IconDownload } from "@tabler/icons-react";
import { useDispatch } from "react-redux";

import CustomButton from "@/components/custom/Button";
import { SourcesTable } from "@/components/onboarding/sources/SourcesTable";
import { ImportModal } from "@/components/onboarding/sources/ImportModal";
import { completeStep } from "@/store/onboardingSlice";
import { useSourcesManager } from "@/hooks/useSourcesManager";

export default function SourcesPage() {
  const dispatch = useDispatch();

  const {
    isImportModalOpen,
    setIsImportModalOpen,
    uploadedFile,
    handleFileSelect,
    handleFileRemove,
    data,
    rowCount,
    setRowCount,
    handleRowCountChange,
    disabled,
    handleImport,
  } = useSourcesManager(1);

  return (
    <div className="min-h-screen w-full py-2  sm:px-6">
      <div className="mx-auto w-full max-w-[1231px] flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4">
          <div className="flex flex-col font-sans">
            <h2 className="font-black text-xl">Sources</h2>
            <span className="font-normal text-md text-[#3D3D3A]">
              Upload an Excel file with your social media followers
            </span>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 flex-wrap w-full sm:w-fit">
            <CustomButton
              text="IMPORT CSV/EXCEL"
              icon={<IconDownload size={16} />}
              width="187px"
              height="40px"
              className="bg-[#FFBA49] w-full text-[#141413] hover:text-[#141413] hover:bg-[#FFBA49]/80"
              onClick={() => setIsImportModalOpen(true)}
            />

            <Link href="/onboarding/publishers">
              <CustomButton
                text="Next"
                iconPosition="right"
                height="40px"
                width="140px"
                disabled={disabled}
                onClick={() => dispatch(completeStep(3))}
              />
            </Link>
          </div>
        </div>

        {/* Sources Table */}
        <SourcesTable data={data} />

        {/* Add Row Controls */}
        <div className=" flex items-center sm:gap-4 space-x-2 text-sm fixed bottom-0 bg-[#FFFFFF] h-[46px] border w-full sm:w-[1231px] px-4 ">
          <button className="font-sans text-[#141413] font-semibold">
            Add
          </button>
          <input
            type="number"
            min="1"
            max="100"
            value={rowCount}
            onChange={(e) =>
              setRowCount(Math.max(1, Number.parseInt(e.target.value) || 1))
            }
            className="w-10.5 px-1 text-center border border-[#1F1E1D26] bg-[#FCFDFD] rounded-[6px]"
          />
          <span className="text-gray-600">more rows</span>
        </div>

        {/* Import Modal */}
        <ImportModal
          isOpen={isImportModalOpen}
          onClose={() => setIsImportModalOpen(false)}
          uploadedFile={uploadedFile}
          onFileSelect={handleFileSelect}
          onFileRemove={handleFileRemove}
          onImport={handleImport}
        />
      </div>
    </div>
  );
}
