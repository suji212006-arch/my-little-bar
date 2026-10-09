"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDisplayName } from "@/hooks/useDisplayName";
import { Badge } from "@/components/ui";

export const Navbar: React.FC = () => {
  const { displayName, isEditing, tempName, setTempName, setIsEditing, saveName } =
    useDisplayName();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveName(tempName);
  };

  return (
    <nav className="w-full bg-[#FBF7F0] border-b-2 border-[#241714] sticky top-0 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Brand Signboard / Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#D99A2B] rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-full bg-[#A51F32] border-2 border-[#241714] flex items-center justify-center text-[#FBF7F0] shadow-[2px_2px_0px_#241714] group-hover:rotate-6 transition-transform">
            <span className="font-serif text-lg font-bold">🍸</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-[#321B18] leading-none group-hover:text-[#A51F32] transition-colors">
              My Little Bar
            </span>
            <span className="font-handwriting text-xs sm:text-sm text-[#A51F32] font-semibold -mt-0.5 tracking-wider">
              Le Petit Bar Parisien
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/#destinations"
            className="font-serif text-sm font-semibold text-[#321B18] hover:text-[#A51F32] transition-colors hover:underline underline-offset-4"
          >
            Explore the Bar
          </Link>

          <Link
            href="/mixer"
            className="font-serif text-sm font-semibold text-[#321B18] hover:text-[#A51F32] transition-colors hover:underline underline-offset-4"
          >
            Drink Mixer
          </Link>

          <Link
            href="/journal"
            className="font-serif text-sm font-semibold text-[#321B18] hover:text-[#A51F32] transition-colors flex items-center gap-1.5"
          >
            <span>Blends by</span>
            <span className="font-handwriting text-lg text-[#A51F32] font-bold">
              {displayName}
            </span>
          </Link>
        </div>

        {/* Display Name Quick-Editor / Profile Pill */}
        <div className="hidden sm:flex items-center gap-2">
          {isEditing ? (
            <form onSubmit={handleEditSubmit} className="flex items-center gap-1.5">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                autoFocus
                maxLength={20}
                className="w-28 px-2 py-1 text-xs font-serif bg-white border-2 border-[#241714] rounded shadow-[1px_1px_0px_#241714] focus:outline-none focus:ring-1 focus:ring-[#D99A2B]"
                placeholder="Your name"
              />
              <button
                type="submit"
                className="px-2 py-1 text-xs bg-[#D99A2B] text-[#241714] font-serif font-bold border-1.5 border-[#241714] rounded shadow-[1px_1px_0px_#241714] hover:bg-[#EDB856] cursor-pointer"
                title="Save display name"
              >
                ✓
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-1.5 py-1 text-xs text-[#321B18]/70 hover:text-[#321B18] cursor-pointer"
              >
                ✕
              </button>
            </form>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="group flex items-center gap-2 px-3 py-1.5 bg-[#F4EBDD] hover:bg-[#D5B99A]/30 border-1.5 border-[#241714] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[2px_2px_0px_#241714] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer transition-all"
              title="Click to change your barista name"
            >
              <span className="text-xs" aria-hidden="true">
                ✍️
              </span>
              <span className="text-xs font-serif text-[#321B18]">
                Barista:{" "}
                <span className="font-bold underline decoration-[#D99A2B]">
                  {displayName}
                </span>
              </span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-[#241714] rounded-lg bg-[#F4EBDD] text-[#321B18] shadow-[2px_2px_0px_#241714] active:shadow-none cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-lg font-bold leading-none">
              {mobileMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#241714] bg-[#FBF7F0] px-6 py-5 space-y-4 shadow-inner">
          <div className="flex flex-col space-y-3 font-serif text-base">
            <Link
              href="/#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#321B18] font-bold hover:text-[#A51F32]"
            >
              ✦ Explore the Bar
            </Link>
            <Link
              href="/mixer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#321B18] font-bold hover:text-[#A51F32]"
            >
              ✦ Drink Mixer
            </Link>
            <Link
              href="/journal"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#321B18] font-bold hover:text-[#A51F32] flex items-center justify-between"
            >
              <span>✦ Blends by {displayName}</span>
              <Badge variant="ochre" size="sm">
                Journal
              </Badge>
            </Link>
          </div>

          <div className="pt-3 border-t border-[#241714]/20 flex items-center justify-between">
            <span className="text-xs font-serif text-[#321B18]/80">
              Barista: <strong>{displayName}</strong>
            </span>
            <button
              type="button"
              onClick={() => {
                const promptName = window.prompt("Change your barista name:", displayName);
                if (promptName) saveName(promptName);
              }}
              className="text-xs text-[#A51F32] font-serif underline cursor-pointer"
            >
              Edit Name
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
