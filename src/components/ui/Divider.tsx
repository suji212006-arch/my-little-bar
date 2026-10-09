import React from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "wavy" | "dashed" | "flourish" | "solid";
  icon?: "cup" | "star" | "dots" | "none";
}

export const Divider: React.FC<DividerProps> = ({
  className = "",
  variant = "flourish",
  icon = "cup",
  ...props
}) => {
  if (variant === "wavy") {
    return (
      <div className={`w-full py-4 flex items-center justify-center overflow-hidden ${className}`} {...props}>
        <svg
          className="w-full max-w-md h-4 text-[#241714]"
          viewBox="0 0 300 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8 Q 25 0, 50 8 T 100 8 T 150 8 T 200 8 T 250 8 T 300 8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  if (variant === "dashed") {
    return (
      <div className={`w-full border-t-2 border-dashed border-[#241714]/40 my-4 ${className}`} {...props} />
    );
  }

  if (variant === "solid") {
    return (
      <div className={`w-full border-t-2 border-solid border-[#241714] my-4 ${className}`} {...props} />
    );
  }

  // Flourish variant with optional center icon
  return (
    <div className={`w-full flex items-center justify-center gap-3 my-6 ${className}`} {...props}>
      <div className="flex-1 h-[2px] bg-[#241714]/30 rounded-full" />
      {icon === "cup" && (
        <span className="text-[#A51F32] text-lg select-none px-2 font-serif font-bold">
          ☕
        </span>
      )}
      {icon === "star" && (
        <span className="text-[#D99A2B] text-base select-none px-2 font-bold">
          ✦ ✦ ✦
        </span>
      )}
      {icon === "dots" && (
        <span className="text-[#241714]/50 text-xs tracking-[6px] select-none px-2">
          •••
        </span>
      )}
      <div className="flex-1 h-[2px] bg-[#241714]/30 rounded-full" />
    </div>
  );
};
