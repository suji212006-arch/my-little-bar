import React from "react";

export const CafeInteriorIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative w-full aspect-[16/10] max-h-[460px] overflow-hidden rounded-2xl border-2 border-[#241714] bg-[#FBF7F0] shadow-[5px_5px_0px_#241714] select-none ${className}`}
      role="img"
      aria-label="Illustrated Parisian café interior showing a cozy espresso bar counter with brass machine, vintage bottles, pastries, and chalkboard menu"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background wall wallpaper - subtle vintage stripe */}
        <defs>
          <pattern
            id="cafe-wall-stripe"
            width="24"
            height="500"
            patternUnits="userSpaceOnUse"
          >
            <rect width="12" height="500" fill="#F4EBDD" />
            <rect x="12" width="12" height="500" fill="#ECE1CF" />
          </pattern>
          <filter id="ink-sketch" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
          </filter>
        </defs>

        <rect width="800" height="500" fill="url(#cafe-wall-stripe)" />

        {/* Back wall wood wainscoting panel */}
        <rect
          x="0"
          y="310"
          width="800"
          height="190"
          fill="#D5B99A"
          stroke="#241714"
          strokeWidth="2.5"
        />
        <line x1="0" y1="340" x2="800" y2="340" stroke="#241714" strokeWidth="2" strokeDasharray="6 4" />
        <line x1="160" y1="340" x2="160" y2="500" stroke="#241714" strokeWidth="2" />
        <line x1="320" y1="340" x2="320" y2="500" stroke="#241714" strokeWidth="2" />
        <line x1="480" y1="340" x2="480" y2="500" stroke="#241714" strokeWidth="2" />
        <line x1="640" y1="340" x2="640" y2="500" stroke="#241714" strokeWidth="2" />

        {/* Top Awning banner */}
        <g id="canopy">
          <path
            d="M 0 0 L 800 0 L 800 65 L 0 65 Z"
            fill="#A51F32"
            stroke="#241714"
            strokeWidth="2.5"
          />
          {/* Awning stripes */}
          <path d="M 50 0 L 100 0 L 100 65 L 50 65 Z" fill="#FBF7F0" />
          <path d="M 150 0 L 200 0 L 200 65 L 150 65 Z" fill="#FBF7F0" />
          <path d="M 250 0 L 300 0 L 300 65 L 250 65 Z" fill="#FBF7F0" />
          <path d="M 350 0 L 400 0 L 400 65 L 350 65 Z" fill="#FBF7F0" />
          <path d="M 450 0 L 500 0 L 500 65 L 450 65 Z" fill="#FBF7F0" />
          <path d="M 550 0 L 600 0 L 600 65 L 550 65 Z" fill="#FBF7F0" />
          <path d="M 650 0 L 700 0 L 700 65 L 650 65 Z" fill="#FBF7F0" />
          <path d="M 750 0 L 800 0 L 800 65 L 750 65 Z" fill="#FBF7F0" />
          {/* Awning scallops */}
          <path
            d="M 0 65 Q 25 80, 50 65 Q 75 80, 100 65 Q 125 80, 150 65 Q 175 80, 200 65 Q 225 80, 250 65 Q 275 80, 300 65 Q 325 80, 350 65 Q 375 80, 400 65 Q 425 80, 450 65 Q 475 80, 500 65 Q 525 80, 525 65 Q 550 80, 575 65 Q 600 80, 625 65 Q 650 80, 675 65 Q 700 80, 725 65 Q 750 80, 775 65 Q 800 80, 800 65"
            fill="#A51F32"
            stroke="#241714"
            strokeWidth="2.5"
          />
        </g>

        {/* Vintage Hanging Lantern */}
        <g id="lantern" transform="translate(110, 40)">
          <line x1="30" y1="20" x2="30" y2="80" stroke="#241714" strokeWidth="2.5" />
          {/* Lantern dome */}
          <path
            d="M 15 80 C 15 75, 45 75, 45 80 L 48 105 C 48 118, 12 118, 12 105 Z"
            fill="#EDB856"
            stroke="#241714"
            strokeWidth="2.5"
          />
          <circle cx="30" cy="95" r="10" fill="#FFF9E6" />
          {/* Warm glow rays */}
          <circle cx="30" cy="95" r="28" fill="#D99A2B" opacity="0.25" />
        </g>

        {/* Chalkboard Menu on Wall */}
        <g id="chalkboard" transform="translate(560, 100)">
          {/* Frame */}
          <rect
            x="0"
            y="0"
            width="170"
            height="140"
            rx="6"
            fill="#D5B99A"
            stroke="#241714"
            strokeWidth="3"
          />
          {/* Chalkboard surface */}
          <rect
            x="10"
            y="10"
            width="150"
            height="120"
            rx="3"
            fill="#241714"
          />
          {/* Chalk text & doodles */}
          <text
            x="85"
            y="32"
            fill="#F4EBDD"
            fontSize="14"
            fontFamily="serif"
            fontWeight="bold"
            textAnchor="middle"
          >
            MENU DU JOUR
          </text>
          <line x1="30" y1="38" x2="140" y2="38" stroke="#EDB856" strokeWidth="1.5" />
          <text x="25" y="58" fill="#F4EBDD" fontSize="10" fontFamily="sans-serif">
            • Café Crème .... 4.5€
          </text>
          <text x="25" y="74" fill="#F4EBDD" fontSize="10" fontFamily="sans-serif">
            • Chai Impérial . 5.0€
          </text>
          <text x="25" y="90" fill="#F4EBDD" fontSize="10" fontFamily="sans-serif">
            • Soda Pêche .... 4.0€
          </text>
          <text x="25" y="106" fill="#F4EBDD" fontSize="10" fontFamily="sans-serif">
            • Spritz Bar .... 7.5€
          </text>
          <text x="85" y="122" fill="#EDB856" fontSize="9" fontFamily="cursive" textAnchor="middle">
            ~ Fait Maison avec Amour ~
          </text>
        </g>

        {/* Wall Shelves with Jars & Bottles */}
        <g id="shelves" transform="translate(200, 90)">
          {/* Shelf 1 */}
          <rect
            x="0"
            y="70"
            width="320"
            height="10"
            fill="#321B18"
            stroke="#241714"
            strokeWidth="2.5"
            rx="2"
          />
          {/* Shelf brackets */}
          <path d="M 30 80 L 30 100 L 45 80" stroke="#241714" strokeWidth="2.5" fill="none" />
          <path d="M 290 80 L 290 100 L 275 80" stroke="#241714" strokeWidth="2.5" fill="none" />

          {/* Bottles on Shelf 1 */}
          {/* Amber Bottle */}
          <rect x="25" y="22" width="22" height="48" rx="3" fill="#D99A2B" stroke="#241714" strokeWidth="2" />
          <rect x="31" y="14" width="10" height="8" fill="#D5B99A" stroke="#241714" strokeWidth="1.5" />
          <rect x="27" y="38" width="18" height="18" fill="#FBF7F0" stroke="#241714" strokeWidth="1" />
          {/* Red Syrup Bottle */}
          <rect x="60" y="15" width="26" height="55" rx="4" fill="#A51F32" stroke="#241714" strokeWidth="2" />
          <rect x="68" y="7" width="10" height="8" fill="#F4EBDD" stroke="#241714" strokeWidth="1.5" />
          <text x="73" y="44" fill="#FBF7F0" fontSize="8" fontWeight="bold" textAnchor="middle">
            SIROP
          </text>
          {/* Green Botanical Bottle */}
          <path
            d="M 100 28 C 100 20, 110 15, 110 10 L 116 10 C 116 15, 126 20, 126 28 L 126 70 L 100 70 Z"
            fill="#5E7D58"
            stroke="#241714"
            strokeWidth="2"
          />
          {/* Tea Tins */}
          <rect x="145" y="30" width="30" height="40" rx="2" fill="#EDB856" stroke="#241714" strokeWidth="2" />
          <rect x="143" y="27" width="34" height="6" fill="#D99A2B" stroke="#241714" strokeWidth="1.5" />
          <text x="160" y="52" fill="#321B18" fontSize="8" fontWeight="bold" textAnchor="middle">
            CHAI
          </text>

          <rect x="185" y="32" width="28" height="38" rx="2" fill="#A51F32" stroke="#241714" strokeWidth="2" />
          <rect x="183" y="29" width="32" height="6" fill="#861625" stroke="#241714" strokeWidth="1.5" />
          <text x="199" y="54" fill="#FBF7F0" fontSize="8" fontWeight="bold" textAnchor="middle">
            THÉ
          </text>

          {/* Plant pot */}
          <path d="M 235 48 L 265 48 L 260 70 L 240 70 Z" fill="#C27A58" stroke="#241714" strokeWidth="2" />
          {/* Leaves */}
          <circle cx="250" cy="40" r="8" fill="#5E7D58" stroke="#241714" strokeWidth="1.5" />
          <circle cx="242" cy="44" r="7" fill="#4B6646" stroke="#241714" strokeWidth="1.5" />
          <circle cx="258" cy="44" r="7" fill="#6F8E68" stroke="#241714" strokeWidth="1.5" />
        </g>

        {/* Vintage Espresso Machine */}
        <g id="espresso-machine" transform="translate(60, 210)">
          {/* Main Body */}
          <rect
            x="0"
            y="25"
            width="145"
            height="115"
            rx="12"
            fill="#D99A2B"
            stroke="#241714"
            strokeWidth="3"
          />
          {/* Chrome / Brass accent panels */}
          <rect
            x="12"
            y="38"
            width="121"
            height="50"
            rx="6"
            fill="#F4EBDD"
            stroke="#241714"
            strokeWidth="2"
          />
          {/* Pressure gauges */}
          <circle cx="45" cy="62" r="14" fill="#FFF" stroke="#241714" strokeWidth="2" />
          <line x1="45" y1="62" x2="52" y2="56" stroke="#A51F32" strokeWidth="2" />
          <circle cx="100" cy="62" r="14" fill="#FFF" stroke="#241714" strokeWidth="2" />
          <line x1="100" y1="62" x2="94" y2="54" stroke="#A51F32" strokeWidth="2" />

          {/* Portafilters / Group Heads */}
          <rect x="35" y="88" width="20" height="12" fill="#321B18" stroke="#241714" strokeWidth="2" />
          <rect x="90" y="88" width="20" height="12" fill="#321B18" stroke="#241714" strokeWidth="2" />
          <path d="M 55 94 L 75 97" stroke="#241714" strokeWidth="3" strokeLinecap="round" />
          <path d="M 110 94 L 130 97" stroke="#241714" strokeWidth="3" strokeLinecap="round" />

          {/* Steam pipe */}
          <path d="M 135 60 C 150 60, 150 95, 140 110" stroke="#321B18" strokeWidth="3" fill="none" />

          {/* Cup warming rack on top */}
          <path d="M 15 25 L 130 25" stroke="#241714" strokeWidth="3" />
          <circle cx="35" cy="18" r="7" fill="#FBF7F0" stroke="#241714" strokeWidth="1.5" />
          <circle cx="60" cy="18" r="7" fill="#FBF7F0" stroke="#241714" strokeWidth="1.5" />
          <circle cx="85" cy="18" r="7" fill="#A51F32" stroke="#241714" strokeWidth="1.5" />
          <circle cx="110" cy="18" r="7" fill="#FBF7F0" stroke="#241714" strokeWidth="1.5" />

          {/* Whimsical steam swirls */}
          <path
            d="M 45 10 C 40 0, 50 -10, 43 -20"
            stroke="#D5B99A"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 100 10 C 105 0, 95 -10, 102 -20"
            stroke="#D5B99A"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Pastry Bell Cloche with Croissant */}
        <g id="cloche" transform="translate(620, 260)">
          {/* Glass dome */}
          <path
            d="M 15 65 C 15 25, 85 25, 85 65 Z"
            fill="#EDF5F7"
            stroke="#241714"
            strokeWidth="2.5"
            opacity="0.85"
          />
          {/* Cloche knob */}
          <circle cx="50" cy="22" r="5" fill="#D99A2B" stroke="#241714" strokeWidth="2" />
          {/* Platter */}
          <ellipse cx="50" cy="65" rx="42" ry="7" fill="#D5B99A" stroke="#241714" strokeWidth="2.5" />
          {/* Golden Croissant */}
          <path
            d="M 32 60 C 35 50, 65 50, 68 60 C 60 56, 40 56, 32 60 Z"
            fill="#D99A2B"
            stroke="#241714"
            strokeWidth="1.5"
          />
        </g>

        {/* The Parisian Wooden Bar Counter (Foreground) */}
        <g id="bar-counter">
          {/* Counter Top Slab */}
          <rect
            x="0"
            y="345"
            width="800"
            height="32"
            fill="#321B18"
            stroke="#241714"
            strokeWidth="3"
          />
          <rect x="0" y="352" width="800" height="6" fill="#4A2B24" />
          {/* Front panel of the bar */}
          <rect
            x="0"
            y="377"
            width="800"
            height="123"
            fill="#A51F32"
            stroke="#241714"
            strokeWidth="3"
          />
          {/* Brass Footrail & Wainscoting trim */}
          <rect x="0" y="390" width="800" height="8" fill="#EDB856" stroke="#241714" strokeWidth="2" />
          <line x1="200" y1="398" x2="200" y2="500" stroke="#241714" strokeWidth="2.5" />
          <line x1="400" y1="398" x2="400" y2="500" stroke="#241714" strokeWidth="2.5" />
          <line x1="600" y1="398" x2="600" y2="500" stroke="#241714" strokeWidth="2.5" />

          {/* Tactile Counter Items */}
          {/* Steaming Coffee Cup on Saucer */}
          <g transform="translate(260, 315)">
            <ellipse cx="25" cy="32" rx="24" ry="6" fill="#F4EBDD" stroke="#241714" strokeWidth="2" />
            <path
              d="M 10 15 C 10 30, 40 30, 40 15 Z"
              fill="#FBF7F0"
              stroke="#241714"
              strokeWidth="2.5"
            />
            {/* Cup handle */}
            <path d="M 40 18 C 48 18, 48 26, 40 28" stroke="#241714" strokeWidth="2" fill="none" />
            {/* Latte art heart */}
            <ellipse cx="25" cy="17" rx="12" ry="4" fill="#321B18" />
            <path d="M 23 16 C 21 14, 25 14, 25 18 C 25 14, 29 14, 27 16 Z" fill="#F4EBDD" />
            {/* Steam */}
            <path d="M 25 8 C 23 2, 28 -4, 24 -10" stroke="#D5B99A" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>

          {/* Coupe Cocktail Glass with Orange Slice & Olive */}
          <g transform="translate(365, 290)">
            {/* Stem & base */}
            <line x1="30" y1="35" x2="30" y2="55" stroke="#241714" strokeWidth="2" />
            <ellipse cx="30" cy="55" rx="14" ry="4" fill="#F4EBDD" stroke="#241714" strokeWidth="2" />
            {/* Bowl */}
            <path
              d="M 12 18 C 12 36, 48 36, 48 18 Z"
              fill="#FBECEF"
              stroke="#241714"
              strokeWidth="2"
            />
            {/* Drink liquid */}
            <path d="M 15 22 C 16 32, 44 32, 45 22 Z" fill="#A51F32" opacity="0.8" />
            {/* Cocktail pick with cherry */}
            <line x1="20" y1="6" x2="38" y2="28" stroke="#241714" strokeWidth="2" />
            <circle cx="24" cy="12" r="5" fill="#861625" stroke="#241714" strokeWidth="1.5" />
          </g>

          {/* Vintage Cocktail Shaker */}
          <g transform="translate(460, 280)">
            <path
              d="M 18 25 L 14 65 L 38 65 L 34 25 Z"
              fill="#D5B99A"
              stroke="#241714"
              strokeWidth="2.5"
            />
            {/* Top cap */}
            <path d="M 16 25 L 20 12 L 32 12 L 36 25 Z" fill="#EDB856" stroke="#241714" strokeWidth="2" />
            <rect x="22" y="6" width="8" height="6" rx="2" fill="#321B18" stroke="#241714" strokeWidth="1.5" />
          </g>

          {/* Little handwritten Recipe Order Ticket pinned to counter */}
          <g transform="translate(540, 310)">
            <rect
              x="0"
              y="0"
              width="60"
              height="35"
              rx="2"
              fill="#FBF7F0"
              stroke="#241714"
              strokeWidth="1.5"
              transform="rotate(6)"
            />
            {/* Red thumbtack */}
            <circle cx="5" cy="5" r="3" fill="#A51F32" stroke="#241714" strokeWidth="1" />
            {/* Doodled lines of recipe */}
            <line x1="10" y1="12" x2="48" y2="12" stroke="#321B18" strokeWidth="1" strokeDasharray="3 2" transform="rotate(6)" />
            <line x1="10" y1="18" x2="42" y2="18" stroke="#321B18" strokeWidth="1" strokeDasharray="3 2" transform="rotate(6)" />
            <line x1="10" y1="24" x2="36" y2="24" stroke="#321B18" strokeWidth="1" strokeDasharray="3 2" transform="rotate(6)" />
          </g>
        </g>
      </svg>
    </div>
  );
};
