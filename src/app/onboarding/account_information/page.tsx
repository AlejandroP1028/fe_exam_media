import React from "react";
import Header from "@/components/login/Header";

import AccountInformationCard from "@/components/onboarding/AccountInformationCard";
const page = () => {
  return (
    <div className="w-full h-screen items-center justify-center flex flex-col space-y-6">
      <AccountInformationCard />
    </div>
  );
};

export default page;
