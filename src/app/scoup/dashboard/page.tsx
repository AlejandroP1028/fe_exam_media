"use client";

import React from "react";
import ScrollableTabs from "@/components/dashboard/CategoryNavigation"; // ✅ Make sure this points to where you saved it
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const Page = () => {
  const categories = [
    "JUDICIAL AND LEGAL CHALLENGES",
    "SOCIAL SECURITY AND DOMESTIC PROGRAM CUTS",
    "BLOCKCHAIN AND THE U.S. SECURITIES MARKETS",
    "NATIONAL SECURITY AND CRITICAL MINERALS",
    "PRESS ACCESS AND MEDIA RELATION",
    "IMMIGRATION AND DEPORTATION CONTROVERSIES",
    "CRACKDOWN ON ACADEMIC INSTITUTIONS",
  ];

  return (
    <div className="min-h-screen  w-full flex flex-col items-center">
      <div className="sm:w-[1440px]">
        <DashboardHeader />
        <div className="mt-2 border-none">
          <ScrollableTabs
            items={categories}
            onSelect={(index, value) => console.log("Selected:", value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
