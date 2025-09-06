import React from "react";
import ScrollableTabs from "./CategoryNavigation";

import { DashboardHeaderProps } from "@/lib/types";

const DashboardHeader = ({ categories }: DashboardHeaderProps) => {
  return (
    <div className="sm:w-[1440px] sticky top-0 z-40 ">
      <div className="   space-y-3">
        <h3 className="py-4 font-sans font-bold leading-[120%] text-xl">
          Office of the President
        </h3>
      </div>

      <div className="mt-2 border-none">
        <ScrollableTabs
          items={categories}
          onSelect={(index, value) => console.log("Selected:", value)}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
