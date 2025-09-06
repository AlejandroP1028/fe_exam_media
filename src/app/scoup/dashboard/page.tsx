"use client";

import React from "react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ArticleCard from "@/components/article/ArticleCard";
import { articles } from "@/lib/articles";
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

      <div className="space-y-6 mt-2">
        {articles.map((article, i) => (
          <ArticleCard
            footer={article.footer}
            key={`article-${i}`}
            header={article.header}
            images={article.images}
            details={article.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
