"use client";

import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "ochre";
  size?: "sm" | "md" | "lg";
  isSketch?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      isSketch = true,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3 py-1 text-sm gap-1.5",
      md: "px-5 py-2 text-base gap-2",
      lg: "px-7 py-3 text-lg font-semibold gap-2.5",
    }[size];

    const variantClasses = {
      primary:
        "bg-[#A51F32] text-[#FBF7F0] hover:bg-[#861625] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#241714]",
      secondary:
        "bg-[#FBF7F0] text-[#321B18] hover:bg-[#D5B99A]/40 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#241714]",
      ochre:
        "bg-[#D99A2B] text-[#241714] hover:bg-[#EDB856] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#241714]",
      outline:
        "bg-transparent text-[#321B18] hover:bg-[#321B18]/5 active:translate-x-[1px] active:translate-y-[1px]",
      ghost:
        "bg-transparent text-[#321B18] hover:bg-[#321B18]/10 border-transparent shadow-none",
    }[variant];

    const borderAndShadow =
      variant !== "ghost"
        ? "border-2 border-[#241714] shadow-[3px_3px_0px_#241714]"
        : "";

    const cornerRadius = isSketch
      ? "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]"
      : "rounded-lg";

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`inline-flex items-center justify-center font-serif transition-transform duration-75 select-none focus:outline-none focus:ring-2 focus:ring-[#D99A2B] focus:ring-offset-2 ${sizeClasses} ${variantClasses} ${borderAndShadow} ${cornerRadius} ${
          disabled ? "opacity-50 cursor-not-allowed shadow-none" : "cursor-pointer"
        } ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
