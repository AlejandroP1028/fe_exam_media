"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import CustomButton from "@/components/custom/Button";
import Link from "next/link";
import { useOnboardingForm } from "@/hooks/useOnboardingForm";
import { InputField } from "./InputField";

const OnboardingInfoCard = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    jobTitle,
    setJobTitle,
    isFormValid,
    handleNext,
  } = useOnboardingForm(1);

  return (
    <Card
      className="
        w-full sm:w-124 font-sans bg-[#FAF9F5] rounded-[32px]
         border-0 sm:border sm:border-[#1F1E1D] sm:border-opacity-15
        px-2 sm:px-6 opacity-100  shadow-none sm:drop-shadow-card
      "
    >
      <CardHeader className="flex flex-col px-2 sm:px-6">
        <CardTitle className="text-[#2B2B26] font-semibold text-2xl">
          Account Information
        </CardTitle>
        <CardDescription className="leading-1.4 text-[#000000A8]">
          Create your account to get started with your newsletter journey
        </CardDescription>
      </CardHeader>

      <CardContent className="px-2 sm:px-6">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <InputField
            id="first-name"
            label="First Name"
            placeholder="Enter your first name"
            value={firstName}
            onChange={setFirstName}
            required
          />

          <InputField
            id="last-name"
            label="Last Name"
            placeholder="Enter your last name"
            value={lastName}
            onChange={setLastName}
            required
          />

          <InputField
            id="job-title"
            label="Job Title"
            placeholder="Enter your job title"
            value={jobTitle}
            onChange={setJobTitle}
            required
          />

          <Link href="/onboarding/keywords">
            <CustomButton
              text="NEXT"
              width="100%"
              className="mt-2"
              disabled={!isFormValid}
              onClick={handleNext}
            />
          </Link>
        </form>
      </CardContent>
    </Card>
  );
};

export default OnboardingInfoCard;
