import React from "react";

export interface AwningProps {
  className?: string;
  height?: "sm" | "md" | "lg";
}

export const Awning: React.FC<AwningProps> = ({
  className = "",
  height = "md",
}) => {
  const heightClasses = {
    sm: "h-6 sm:h-8",
    md: "h-10 sm:h-14",
    lg: "h-16 sm:h-20",
  }[height];

  return (
    <div className={`w-full overflow-hidden relative shadow-sm ${className}`} aria-hidden="true">
      {/* Striped Canopy */}
      <div className={`w-full ${heightClasses} awning-stripes border-b-2 border-[#241714]`} />

      {/* Scalloped decorative hem */}
      <div className="flex w-full -mt-[1px] overflow-hidden justify-center text-[#A51F32]">
        <svg
          className="w-full h-3 sm:h-4"
          viewBox="0 0 1200 16"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 0 
               C 25 16, 35 16, 60 0 
               C 85 16, 95 16, 120 0 
               C 145 16, 155 16, 180 0 
               C 205 16, 215 16, 240 0 
               C 265 16, 275 16, 300 0 
               C 325 16, 335 16, 360 0 
               C 385 16, 395 16, 420 0 
               C 445 16, 455 16, 480 0 
               C 505 16, 515 16, 540 0 
               C 565 16, 575 16, 600 0 
               C 625 16, 635 16, 660 0 
               C 685 16, 695 16, 720 0 
               C 745 16, 755 16, 780 0 
               C 805 16, 815 16, 840 0 
               C 865 16, 875 16, 900 0 
               C 925 16, 935 16, 960 0 
               C 985 16, 995 16, 1020 0 
               C 1045 16, 1055 16, 1080 0 
               C 1105 16, 1115 16, 1140 0 
               C 1165 16, 1175 16, 1200 0 
               V 0 H 0 Z"
            fill="#A51F32"
            stroke="#241714"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
};
