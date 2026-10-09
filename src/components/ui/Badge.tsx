import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "cherry" | "ochre" | "espresso" | "cream" | "latte";
  size?: "sm" | "md";
  tilt?: "none" | "left" | "right";
  isStamp?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "ochre",
  size = "md",
  tilt = "none",
  isStamp = false,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs font-medium tracking-wide",
    md: "px-3 py-1 text-xs sm:text-sm font-semibold tracking-wider",
  }[size];

  const variantClasses = {
    cherry: "bg-[#A51F32] text-[#FBF7F0] border-[#241714]",
    ochre: "bg-[#D99A2B] text-[#241714] border-[#241714]",
    espresso: "bg-[#321B18] text-[#F4EBDD] border-[#241714]",
    cream: "bg-[#FBF7F0] text-[#321B18] border-[#241714]",
    latte: "bg-[#D5B99A] text-[#241714] border-[#241714]",
  }[variant];

  const tiltClasses = {
    none: "",
    left: "-rotate-2",
    right: "rotate-2",
  }[tilt];

  const stampStyles = isStamp
    ? "border-2 border-dashed uppercase tracking-widest font-mono"
    : "border-[1.5px] border-solid rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[1px_1px_0px_#241714]";

  return (
    <span
      className={`inline-flex items-center justify-center select-none uppercase font-serif ${sizeClasses} ${variantClasses} ${tiltClasses} ${stampStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
