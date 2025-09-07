"use client";

import React from "react";
import Link from "next/link";
import CustomButton from "@/components/custom/Button";
import { useDispatch } from "react-redux";
import { completeStep } from "@/store/onboardingSlice";
import { Publishers, SocialSource } from "@/lib/types";
import AccountInformationCell from "@/components/onboarding/AccountInformationCell";
import SocialSources from "@/components/onboarding/SocialSources";
import KeywordsNum, {
  KeywordsProps,
} from "@/components/onboarding/KeywordsNum";
const Page = () => {
  const dispatch = useDispatch();

  const socialSources: (Publishers | SocialSource)[] = [
    { image: "/X.svg", platform: "X(Twitter)", quantity: 54 },
    { image: "/FB.svg", platform: "Facebook", quantity: 36 },
    { image: "/Reddit.svg", platform: "Reddit", quantity: 28 },
    { image: "/Youtube.svg", platform: "Youtube", quantity: 12 },
    { image: "/Online.svg", quantity: 57 }, // <- publisher (no platform)
  ];

  const keywords: KeywordsProps[] = [
    { image: "/check-fill.svg", type: "Main", quantity: 41 },
    { image: "/add-line.svg", type: "Additional", quantity: 36 },
    { image: "/close-line.svg", type: "Excluded", quantity: 41 },
  ];

  return (
    <div className="min-h-screen py-4 w-full flex flex-col items-center">
      <div className="w-[800px] flex flex-col px-4 mb-4">
        {/* Header Row */}
        <div className="flex flex-row justify-between items-start w-full">
          {/* Text Section */}
          <div className="flex flex-col font-sans">
            <h2 className="font-black text-xl">Review and Complete</h2>
            <span className="font-normal text-md text-[#3D3D3A]">
              Make sure everything&apos;s good to go
            </span>
          </div>

          {/* Button Section */}
          <Link href="/success" passHref>
            <CustomButton
              text="COMPLETE"
              width="140px"
              height="40px"
              onClick={() => {
                dispatch(completeStep(2));
              }}
            />
          </Link>
        </div>
      </div>

      <div className="w-[800px] font-sans">
        <div className="grid max-h-[460px] gap-5 grid-cols-1 sm:grid-cols-2">
          {/* Account Info Card */}
          <div className="col-span-2 p-8 bg-white rounded-2xl gap-4 grid grid-cols-3">
            <div className="col-span-3 text-xl tracking-tight font-bold">
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

          {/* Social Sources Card */}
          <div className="col-span-1 bg-white rounded-2xl p-8 flex flex-col space-y-3">
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
          <div className="col-span-1 bg-white rounded-2xl p-8 flex flex-col space-y-3">
            <div className="text-xl tracking-tight font-bold mb-2">
              Keywords
            </div>

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
    </div>
  );
};

export default Page;
