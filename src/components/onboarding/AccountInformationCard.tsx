"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeStep } from "@/store/onboardingSlice"; // ✅ import slice action
import CustomButton from "@/components/custom/Button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

const OnboardingInfoCard = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const isFormValid =
    firstName.trim() !== "" && lastName.trim() !== "" && jobTitle.trim() !== "";

  const handleNext = () => {
    if (isFormValid) {
      dispatch(completeStep(1)); // ✅ mark step 1 as finished in Redux
    }
  };

  return (
    <Card className="w-124 font-sans bg-[#FAF9F5] rounded-[32px] border border-[#1F1E1D] border-opacity-15 px-2 opacity-100">
      <CardHeader className="flex flex-col ">
        <CardTitle className=" text-[#2B2B26] font-semibold text-2xl">
          Account Information
        </CardTitle>
        <CardDescription className="leading-1.4 text-[#000000A8]">
          Create your account to get started with your newsletter journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* First Name */}
          <div>
            <label
              htmlFor="first-name"
              className="mb-1 block text-sm font-semibold text-[#121212]"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="first-name"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="font-archivo text-[14px] bg-white font-normal leading-[140%]"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="mb-1 block text-sm font-semibold text-[#121212]"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="last-name"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="font-archivo text-[14px] bg-white font-normal leading-[140%]"
            />
          </div>

          {/* Job Title */}
          <div>
            <label
              htmlFor="job-title"
              className="mb-1 block text-sm font-semibold text-[#121212]"
            >
              Job Title <span className="text-red-500">*</span>
            </label>
            <Input
              id="job-title"
              type="text"
              placeholder="Enter your job title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="font-archivo text-[14px] bg-white font-normal leading-[140%]"
            />
          </div>

          {/* NEXT Button */}
          <Link href="/onboarding/keywords">
            <CustomButton
              text="NEXT"
              width="100%"
              className="mt-2"
              disabled={!isFormValid}
              onClick={handleNext} // ✅ mark step as finished
            />
          </Link>
        </form>
      </CardContent>
    </Card>
  );
};

export default OnboardingInfoCard;
