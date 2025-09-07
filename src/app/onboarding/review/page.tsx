"use client";

import React from "react";
import Link from "next/link";
import CustomButton from "@/components/custom/Button";
import { useDispatch } from "react-redux";
import { completeStep } from "@/store/onboardingSlice";
import { Publishers, SocialSource } from "@/lib/types";
import AccountInformationCell from "@/components/onboarding/review/AccountInformationCell";
import SocialSources from "@/components/onboarding/review/SocialSources";
import KeywordsNum, {
  KeywordsProps,
} from "@/components/onboarding/review/KeywordsNum";

const ReviewPage = () => {
  const dispatch = useDispatch();

  const socialSources: (Publishers | SocialSource)[] = [
    { image: "/X.svg", platform: "X(Twitter)", quantity: 54 },
    { image: "/FB.svg", platform: "Facebook", quantity: 36 },
    { image: "/Reddit.svg", platform: "Reddit", quantity: 28 },
    { image: "/Youtube.svg", platform: "Youtube", quantity: 12 },
    { image: "/Online.svg", quantity: 57 },
  ];

  const keywords: KeywordsProps[] = [
    { image: "/check-fill.svg", type: "Main", quantity: 41 },
    { image: "/add-line.svg", type: "Additional", quantity: 36 },
    { image: "/close-line.svg", type: "Excluded", quantity: 41 },
  ];

  return (
    <div className="min-h-screen py-4 w-full flex flex-col items-center sm:px-4">
      {/* Header */}
      <div className="w-full max-w-[800px] flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 px-4 sm:px-0">
        <div className="flex flex-col font-sans mb-2 sm:mb-0">
          <h2 className="font-black text-xl">Review and Complete</h2>
          <span className="font-normal text-md text-[#3D3D3A]">
            Make sure everything&apos;s good to go
          </span>
        </div>
        <div className="flex w-full sm:w-[140px] h-[40px] mt-2 sm:mt-0">
          <Link href="/success" className="w-full">
            <CustomButton
              text="COMPLETE"
              width="100%"
              height="40px"
              onClick={() => dispatch(completeStep(4))}
            />
          </Link>
        </div>
      </div>

      {/* Content Grid */}
      <div className="w-full max-w-[800px] font-sans grid gap-5 grid-cols-1 lg:grid-cols-2">
        {/* Account Info Card */}
        <div className="col-span-1 lg:col-span-2 p-6 sm:p-8 bg-white rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-1 lg:col-span-3 text-xl tracking-tight font-bold mb-2">
            Account Information
          </div>
          <AccountInformationCell title="Name" value="Maricel Alonzo" />
          <AccountInformationCell
            title="Email"
            value="maricel.alonzo@gmail.com"
          />
          <AccountInformationCell
            title="Job Title"
            value="Marketing Strategist"
          />
        </div>

        {/* Social Sources */}
        <div className="col-span-1 p-6 sm:p-8 bg-white rounded-2xl flex flex-col space-y-3">
          <div className="text-xl tracking-tight font-bold mb-2">
            Connected Social Sources
          </div>
          {socialSources.map((source, i) => (
            <SocialSources
              key={i}
              quantity={source.quantity}
              image={source.image}
              platform={"platform" in source ? source.platform : undefined}
            />
          ))}
        </div>

        {/* Keywords */}
        <div className="col-span-1 p-6 sm:p-8 bg-white rounded-2xl flex flex-col space-y-3">
          <div className="text-xl tracking-tight font-bold mb-2">Keywords</div>
          {keywords.map((keyword, i) => (
            <KeywordsNum
              key={i}
              quantity={keyword.quantity}
              image={keyword.image}
              type={keyword.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
