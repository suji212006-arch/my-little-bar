import React from "react";

export interface PaperContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "parchment" | "cream" | "espresso" | "chalkboard";
  padding?: "none" | "sm" | "md" | "lg";
  withPin?: boolean;
  withTape?: boolean;
  sketchBorder?: boolean;
}

export const PaperContainer: React.FC<PaperContainerProps> = ({
  children,
  className = "",
  variant = "cream",
  padding = "md",
  withPin = false,
  withTape = false,
  sketchBorder = true,
  ...props
}) => {
  const bgClasses = {
    cream: "bg-[#FBF7F0] text-[#321B18]",
    parchment: "bg-[#F4EBDD] text-[#321B18]",
    espresso: "bg-[#321B18] text-[#F4EBDD]",
    chalkboard: "bg-[#241714] text-[#FBF7F0]",
  }[variant];

  const paddingClasses = {
    none: "p-0",
    sm: "p-3 sm:p-4",
    md: "p-5 sm:p-6",
    lg: "p-6 sm:p-8 md:p-10",
  }[padding];

  const borderClasses = sketchBorder
    ? "border-2 border-[#241714] rounded-[20px_8px_18px_6px/7px_18px_8px_19px]"
    : "border-2 border-[#241714] rounded-xl";

  return (
    <div
      className={`relative ${bgClasses} ${paddingClasses} ${borderClasses} shadow-[4px_4px_0px_#241714] ${className}`}
      {...props}
    >
      {/* Decorative brass café pin */}
      {withPin && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#D99A2B] border-2 border-[#241714] shadow-[1px_1px_0px_#241714] flex items-center justify-center z-10"
          aria-hidden="true"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#321B18]/60" />
        </div>
      )}

      {/* Decorative washi tape / paper tape */}
      {withTape && (
        <div
          className="absolute -top-3.5 left-8 w-20 h-5 bg-[#D5B99A]/80 border border-[#241714]/30 -rotate-3 backdrop-blur-xs pointer-events-none shadow-xs z-10"
          aria-hidden="true"
        />
      )}

      {children}
    </div>
  );
};
