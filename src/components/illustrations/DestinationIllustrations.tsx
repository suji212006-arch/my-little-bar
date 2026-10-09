import React from "react";

export const CoffeeIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 160 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full select-none ${className}`}
    aria-hidden="true"
  >
    {/* Steam swirls */}
    <path
      d="M 68 28 C 65 18, 75 12, 70 4"
      stroke="#D5B99A"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 88 28 C 92 18, 82 12, 86 4"
      stroke="#D5B99A"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Classic Moka Pot */}
    {/* Pot top cap */}
    <circle cx="80" cy="30" r="5" fill="#D99A2B" stroke="#241714" strokeWidth="2" />
    <polygon
      points="60,40 100,40 92,72 68,72"
      fill="#FBF7F0"
      stroke="#241714"
      strokeWidth="2.5"
    />
    {/* Waist */}
    <rect x="70" y="72" width="20" height="8" fill="#321B18" stroke="#241714" strokeWidth="2" />
    {/* Pot base */}
    <polygon
      points="68,80 92,80 102,115 58,115"
      fill="#D5B99A"
      stroke="#241714"
      strokeWidth="2.5"
    />
    {/* Handle */}
    <path
      d="M 100 48 C 118 55, 118 95, 96 102"
      stroke="#241714"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Spout */}
    <path d="M 60 44 L 48 52 L 64 56" stroke="#241714" strokeWidth="2.5" fill="#FBF7F0" />

    {/* Coffee beans scattered */}
    <g transform="translate(30, 110) rotate(-20)">
      <ellipse cx="10" cy="8" rx="8" ry="6" fill="#321B18" stroke="#241714" strokeWidth="1.5" />
      <path d="M 6 8 C 8 6, 12 10, 14 8" stroke="#F4EBDD" strokeWidth="1" fill="none" />
    </g>
    <g transform="translate(115, 115) rotate(25)">
      <ellipse cx="10" cy="8" rx="8" ry="6" fill="#321B18" stroke="#241714" strokeWidth="1.5" />
      <path d="M 6 8 C 8 6, 12 10, 14 8" stroke="#F4EBDD" strokeWidth="1" fill="none" />
    </g>
  </svg>
);

export const ChaiIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 160 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full select-none ${className}`}
    aria-hidden="true"
  >
    {/* Steam */}
    <path
      d="M 78 20 C 74 10, 84 5, 80 -2"
      stroke="#D99A2B"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Clay / Terracotta Chai Kettle */}
    <path
      d="M 45 60 C 45 42, 115 42, 115 60 L 120 102 C 120 114, 40 114, 40 102 Z"
      fill="#D99A2B"
      stroke="#241714"
      strokeWidth="2.5"
    />
    {/* Kettle lid */}
    <path
      d="M 55 45 C 55 35, 105 35, 105 45 Z"
      fill="#EDB856"
      stroke="#241714"
      strokeWidth="2"
    />
    <circle cx="80" cy="32" r="5" fill="#321B18" stroke="#241714" strokeWidth="2" />

    {/* Kettle Spout */}
    <path
      d="M 45 70 C 25 60, 20 45, 28 40 C 32 45, 34 60, 42 78"
      fill="#EDB856"
      stroke="#241714"
      strokeWidth="2"
    />

    {/* Kettle Handle */}
    <path
      d="M 115 55 C 135 60, 138 90, 118 98"
      stroke="#241714"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Cinnamon stick */}
    <rect
      x="105"
      y="98"
      width="40"
      height="8"
      rx="3"
      transform="rotate(-25 105 98)"
      fill="#6B4226"
      stroke="#241714"
      strokeWidth="1.5"
    />

    {/* Star anise */}
    <g transform="translate(30, 102)">
      <circle cx="12" cy="12" r="4" fill="#321B18" stroke="#241714" strokeWidth="1.5" />
      <polygon
        points="12,2 14,9 21,9 15,13 18,20 12,15 6,20 9,13 3,9 10,9"
        fill="#A51F32"
        stroke="#241714"
        strokeWidth="1"
      />
    </g>
  </svg>
);

export const SodaIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 160 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full select-none ${className}`}
    aria-hidden="true"
  >
    {/* Sparkling bubbles rising */}
    <circle cx="45" cy="25" r="4" fill="#EDF5F7" stroke="#241714" strokeWidth="1.5" />
    <circle cx="58" cy="12" r="6" fill="#FFF" stroke="#241714" strokeWidth="1.5" />
    <circle cx="70" cy="22" r="3" fill="#EDF5F7" stroke="#241714" strokeWidth="1" />
    <circle cx="118" cy="20" r="5" fill="#FFF" stroke="#241714" strokeWidth="1.5" />

    {/* Glass Soda Siphon Bottle */}
    <rect
      x="58"
      y="45"
      width="44"
      height="75"
      rx="12"
      fill="#EDF5F7"
      stroke="#241714"
      strokeWidth="2.5"
    />
    {/* Liquid inside */}
    <rect
      x="62"
      y="65"
      width="36"
      height="50"
      rx="6"
      fill="#D5B99A"
      opacity="0.4"
    />
    {/* Inside straw siphon pipe */}
    <line x1="80" y1="45" x2="80" y2="112" stroke="#241714" strokeWidth="2" strokeDasharray="3 3" />

    {/* Chrome siphon head trigger */}
    <rect x="68" y="32" width="24" height="13" rx="3" fill="#D5B99A" stroke="#241714" strokeWidth="2" />
    <path d="M 68 36 L 50 32 L 52 42 Z" fill="#D99A2B" stroke="#241714" strokeWidth="1.5" />
    <path d="M 92 36 L 105 44" stroke="#241714" strokeWidth="3" strokeLinecap="round" />

    {/* Lemon / Citrus Wheel garnish */}
    <g transform="translate(18, 85)">
      <circle cx="16" cy="16" r="16" fill="#EDB856" stroke="#241714" strokeWidth="2" />
      <circle cx="16" cy="16" r="12" fill="#FFF9E6" stroke="#241714" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="16" y1="4" x2="16" y2="28" stroke="#EDB856" strokeWidth="1.5" />
      <line x1="4" y1="16" x2="28" y2="16" stroke="#EDB856" strokeWidth="1.5" />
    </g>

    {/* Ice Cube */}
    <rect
      x="110"
      y="90"
      width="22"
      height="22"
      rx="4"
      transform="rotate(15 110 90)"
      fill="#FBF7F0"
      stroke="#241714"
      strokeWidth="2"
    />
  </svg>
);

export const HighBarIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 160 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full select-none ${className}`}
    aria-hidden="true"
  >
    {/* Art Deco Coupe Glass */}
    <g transform="translate(35, 20)">
      {/* Bowl */}
      <path
        d="M 5 25 C 5 62, 75 62, 75 25 Z"
        fill="#FBECEF"
        stroke="#241714"
        strokeWidth="2.5"
      />
      {/* Ruby cocktail liquid */}
      <path
        d="M 12 32 C 14 54, 66 54, 68 32 Z"
        fill="#A51F32"
        opacity="0.85"
      />
      {/* Stem */}
      <line x1="40" y1="62" x2="40" y2="98" stroke="#241714" strokeWidth="3" />
      {/* Foot */}
      <ellipse cx="40" cy="98" rx="24" ry="6" fill="#F4EBDD" stroke="#241714" strokeWidth="2.5" />

      {/* Cocktail pick with cherry */}
      <line x1="22" y1="5" x2="52" y2="40" stroke="#241714" strokeWidth="2" strokeLinecap="round" />
      <circle cx="28" cy="14" r="7" fill="#861625" stroke="#241714" strokeWidth="2" />
    </g>

    {/* Shaker in background */}
    <g transform="translate(95, 35)">
      <polygon
        points="10,25 6,75 30,75 26,25"
        fill="#D5B99A"
        stroke="#241714"
        strokeWidth="2"
      />
      <polygon
        points="8,25 12,12 24,12 28,25"
        fill="#D99A2B"
        stroke="#241714"
        strokeWidth="2"
      />
      <rect x="14" y="6" width="8" height="6" rx="2" fill="#321B18" stroke="#241714" strokeWidth="1.5" />
    </g>
  </svg>
);
