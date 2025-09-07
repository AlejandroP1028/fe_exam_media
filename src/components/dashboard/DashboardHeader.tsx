import React from "react";
import ScrollableTabs from "./CategoryNavigation";

import { DashboardHeaderProps } from "@/lib/types";

const DashboardHeader = ({ categories }: DashboardHeaderProps) => {
  return (
    <div className="w-full sm:max-w-[1440px] sticky top-0 z-10 bg-background pb-2">
      {/* Title */}
      <div className="space-y-3 px-4 sm:px-0">
        <h3 className="py-4 font-sans font-bold leading-[120%] text-lg sm:text-xl">
          Office of the President
        </h3>
      </div>

      {/* Tabs */}
      <div className="mt-2 border-none px-4 sm:px-0">
        <ScrollableTabs
          items={categories}
          onSelect={(index, value) => console.log("Selected:", value)}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
