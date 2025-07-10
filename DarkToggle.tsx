"use client";

import { useDarkMode } from "@/providers/DarkModeProvider";
import { Moon, Sun } from "lucide-react";

const DarkToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full border dark:border-gray-600 border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default DarkToggle;
