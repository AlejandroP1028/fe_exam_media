"use client";
import React from "react";
import CustomButton from "../../custom/Button";
import { useDispatch } from "react-redux";
import { completeStep } from "@/store/onboardingSlice";
import Link from "next/link";

const KeywordsHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-[860px] flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 px-4 sm:px-0 space-y-2 sm:space-y-0">
      {/* Title & Subtitle */}
      <div className="flex flex-col font-sans">
        <h2 className="font-black text-xl">Keywords</h2>
        <span className="font-normal text-md text-[#3D3D3A]">
          Setup the keywords needed for the content
        </span>
      </div>

      {/* Complete Button */}
      <div className="flex w-full sm:w-[140px] h-[40px] mt-2 sm:mt-0">
        <Link href="/onboarding/sources" className="w-full">
          <CustomButton
            text="COMPLETE"
            width="100%"
            height="40px"
            onClick={() => dispatch(completeStep(2))}
          />
        </Link>
      </div>
    </div>
  );
};

export default KeywordsHeader;
