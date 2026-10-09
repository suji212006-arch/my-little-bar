"use client";

import { useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "my_little_bar_user_name";
const DEFAULT_NAME = "Sujithra";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("user-name-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("user-name-change", callback);
  };
}

function getSnapshot(): string {
  if (typeof window === "undefined") return DEFAULT_NAME;
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    return val && val.trim() ? val.trim() : DEFAULT_NAME;
  } catch {
    return DEFAULT_NAME;
  }
}

function getServerSnapshot(): string {
  return DEFAULT_NAME;
}

export function useDisplayName() {
  const displayName = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [tempName, setTempName] = useState<string>(displayName);

  const saveName = (newName: string) => {
    const cleaned = newName.trim() || DEFAULT_NAME;
    try {
      localStorage.setItem(STORAGE_KEY, cleaned);
      window.dispatchEvent(new Event("user-name-change"));
    } catch {
      // Ignore write errors
    }
    setIsEditing(false);
  };

  return {
    displayName,
    isEditing,
    tempName,
    setTempName,
    setIsEditing,
    saveName,
  };
}
