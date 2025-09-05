import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
  width?: string; // ex: "200px" or "100%"
  height?: string; // ex: "40px"
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode; // ✅ new optional icon
  iconPosition?: "left" | "right"; // ✅ control icon position
}

const CustomButton: React.FC<ButtonProps> = ({
  width = "auto",
  height = "32px",
  text,
  className,
  disabled = false,
  onClick,
  icon,
  iconPosition = "left",
}) => {
  return (
    <ShadcnButton
      disabled={disabled}
      onClick={onClick}
      style={{ width, height }}
      className={cn(
        "uppercase font-mono font-medium flex items-center justify-center gap-2",
        disabled
          ? "bg-[#0C0C0D33] text-[#F3F3F3] cursor-not-allowed"
          : "bg-[#121212] hover:bg-[#292828] text-[#F3F3F3] hover:text-[#FFBA49] cursor-pointer",
        className
      )}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{icon}</span>
      )}
      <span>{text}</span>
      {icon && iconPosition === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
    </ShadcnButton>
  );
};

export default CustomButton;
