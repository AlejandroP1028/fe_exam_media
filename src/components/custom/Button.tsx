import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
  width?: string; // ex: "200px" or "100%"
  text: string;
  height?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void; // ✅ allow passing a function
}

const CustomButton: React.FC<ButtonProps> = ({
  width = "auto",
  height = "32px",
  text,
  className,
  disabled = false,
  onClick,
}) => {
  return (
    <ShadcnButton
      disabled={disabled}
      onClick={onClick} // ✅ forward click event
      style={{ width }}
      className={cn(
        `uppercase font-mono font-medium h-[${height}]`,
        disabled
          ? "bg-[#0C0C0D33] text-[#F3F3F3] cursor-not-allowed"
          : "bg-[#121212] hover:bg-[#292828] text-[#F3F3F3] hover:text-[#FFBA49] cursor-pointer",

        className
      )}
    >
      {text}
    </ShadcnButton>
  );
};

export default CustomButton;
