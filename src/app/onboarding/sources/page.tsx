"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { SourcesTable } from "@/components/onboarding/SourcesTable";
import { ImportModal } from "@/components/onboarding/ImportModal";
import type { SocialMediaRow } from "@/lib/types";
import Link from "next/link";
import CustomButton from "@/components/custom/Button";
import { IconDownload } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { completeStep } from "@/store/onboardingSlice";
export default function SourcesPage() {
  const dispatch = useDispatch();
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [data, setData] = useState<SocialMediaRow[]>([]);
  const [rowCount, setRowCount] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
  };

  useEffect(() => {
    if (data.length > 0) setDisabled(false);
  }, [data]);

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  const handleImport = () => {
    if (uploadedFile) {
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
    }
  };

  return (
    <div className="min-h-screen py-2 w-full">
      <div className="mx-auto w-[1231px]">
        {/* Header */}
        <div className="w-full flex flex-row justify-between items-center mb-6">
          <div className="flex font-sans flex-col  py-2">
            <h2 className="font-black text-xl">Sources</h2>
            <span className="font-normal text-md text-[#3D3D3A]">
              Upload an Excel file with your social media followers
            </span>
          </div>
          <div className="flex  items-center flex-row gap-3">
            <CustomButton
              text="IMPORT CSV/EXCEL"
              icon={<IconDownload size={16} />}
              width="187px"
              height="40px"
              className="bg-[#FFBA49] text-[#141413] hover:text-[#141413] hover:bg-[#FFBA49]/80 "
              onClick={() => setIsImportModalOpen(true)}
            />

            {/* Next Button (icon on the right) */}
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

        <SourcesTable data={data} />

        {/* Add Row Controls */}
        <div className=" flex items-center gap-4 text-sm fixed bottom-0 bg-[#FFFFFF] h-[46px] border w-[1231px] px-4 ">
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
