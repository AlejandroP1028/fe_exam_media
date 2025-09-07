import React from "react";
import KeywordsManager from "@/components/onboarding/keywords/Keywords";

import KeywordsHeader from "@/components/onboarding/keywords/KeywordsHeader";
const page = () => {
  return (
    <div className="w-full h-screen items-center flex flex-col space-y-6">
      <KeywordsHeader />
      <KeywordsManager />
    </div>
  );
};

export default page;
