"use client";
import React from "react";
import CustomButton from "../custom/Button";
import { useDispatch, UseDispatch } from "react-redux";
import { completeStep } from "@/store/onboardingSlice";
import Link from "next/link";
const KeywordsHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[860px] flex flex-row justify-between items-center">
      <div className="flex font-sans flex-col  py-2">
        <h2 className="font-black text-xl">Keywords</h2>
        <span className="font-normal text-md text-[#3D3D3A]">
          Setup the keywords needed for the content
        </span>
      </div>
      <div className="flex w-[140px] h-[40px] items-center ">
        <Link href={"/onboarding/sources"}>
          <CustomButton
            text="COMPLETE"
            width="100%"
            height="40px"
            onClick={() => {
              dispatch(completeStep(2));
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default KeywordsHeader;
