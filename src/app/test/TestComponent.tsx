import React, { useState } from "react";
import LogoMorph from "@/components/custom/LogoMorph";
import CustomButton from "@/components/custom/Button";

const TestComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex items-center flex-col h-32 px-4">
      <div className="flex items-center space-x-3">
        <LogoMorph expanded={isExpanded} />
      </div>
      <CustomButton
        text={isExpanded ? "Collapse Logo" : "Expand Logo"}
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </div>
  );
};

export default TestComponent;
