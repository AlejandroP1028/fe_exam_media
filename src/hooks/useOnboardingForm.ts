"use client";

import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { completeStep } from "@/store/onboardingSlice";

export function useOnboardingForm(stepNumber: number) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const isFormValid = useMemo(
    () =>
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      jobTitle.trim() !== "",
    [firstName, lastName, jobTitle]
  );

  const handleNext = () => {
    if (isFormValid) {
      dispatch(completeStep(stepNumber));
    }
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    jobTitle,
    setJobTitle,
    isFormValid,
    handleNext,
  };
}
