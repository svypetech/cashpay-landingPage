import React from "react";
import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  iconPath?: string;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  size = "md",
  iconPath,
  iconPosition = "right",
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-poppins font-normal transition-all duration-300 w-[70%] sm:w-auto bg-transparent border-[1px] border-white text-white rounded-[10px]";

  const sizeClasses = {
    sm: "px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-sm",
    md: "px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base",
    lg: "px-6 py-3 text-base sm:px-10 sm:py-4 sm:text-lg",
  };

  const IconComponent = iconPath ? (
    <Image
      src={iconPath}
      alt="Icon"
      width={20}
      height={20}
      className={`w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] transition-transform duration-300 border-box ${
        iconPosition === "left" ? "mr-1.5 sm:mr-2" : "ml-3 sm:ml-5"
      } group-hover:translate-x-1`}
    />
  ) : null;

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${className} group ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconPosition === "left" && IconComponent}
      <span className="truncate">{children}</span>
      {iconPosition === "right" && IconComponent}
    </button>
  );
}
