"use client";

import { useDispatch } from "react-redux";
import { completeStep } from "@/store/onboardingSlice";
import Link from "next/link";
import CustomButton from "@/components/custom/Button";
import { IconDownload } from "@tabler/icons-react";
import { PublishersTable } from "@/components/onboarding/publishers/PublishersTable";
import { ImportModal } from "@/components/onboarding/publishers/ImportModal";
import { usePublishersManager } from "@/hooks/usePublishersManager";

export default function PublishersPage() {
  const dispatch = useDispatch();
  const {
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
  } = usePublishersManager();

  return (
    <div className="min-h-screen py-2 w-full">
      <div className="mx-auto max-w-full sm:max-w-[800px] sm:px-4">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 px-4 sm:px-none">
          <div className="flex flex-col font-sans">
            <h2 className="font-black text-xl">Publishers</h2>
            <span className="font-normal text-md text-[#3D3D3A]">
              Upload an Excel file with your publishers
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 w-full sm:w-auto flex-shrink-0 px-4 sm:px-none">
            <CustomButton
              text="IMPORT CSV/EXCEL"
              icon={<IconDownload size={16} />}
              width="187px"
              height="40px"
              className="bg-[#FFBA49] text-[#141413] hover:text-[#141413] hover:bg-[#FFBA49]/80"
              onClick={() => setIsImportModalOpen(true)}
            />

            <Link href="/onboarding/review">
              <CustomButton
                text="Next"
                iconPosition="right"
                height="40px"
                width="140px"
                disabled={disabled}
                onClick={() => dispatch(completeStep(4))}
              />
            </Link>
          </div>
        </div>

        {/* Publishers Table */}
        <PublishersTable data={data} />

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
              handleRowCountChange(
                Math.max(1, Number.parseInt(e.target.value) || 1)
              )
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
