"use client";

import React from "react";
import ScrollableTabs from "@/components/dashboard/CategoryNavigation"; // ✅ Make sure this points to where you saved it
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ArticleCard from "@/components/article/ArticleCard";
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
      <DashboardHeader categories={categories} />

      <div className="space-y-6 mt-4">
        <ArticleCard
          header={{
            rank: 1,
            title:
              "Davao councilors ask Senate to petition ICC for Duterte’s interim release",
            metrics: {
              engagementScore: 9,
              velocity: 9,
              comments: 12300,
              shares: 33800,
              articles: 42,
              estimatedTraffic: 872,
            },
          }}
          images={[
            "/img1.png",
            "/img2.png",
            "/img3.png",
            "/img4.png",
            "/img5.png",
          ]}
          details={{
            story: "Legal Battle Over Jurisdiction...",
            whyItMatters: "Political and Diplomatic Implications...",
            whoImportant: "Supporters of Duterte argue...",
            biggerPicture: "Davao City Councilors passed a resolution...",
          }}
        />
      </div>
    </div>
  );
};

export default Page;
