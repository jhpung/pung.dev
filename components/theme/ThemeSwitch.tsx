"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa6";
import clsx from "clsx";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      className={clsx("p-2.5 rounded-lg animate-up", {
        "hover:bg-gray-200": resolvedTheme === "light",
        "hover:bg-gray-800": resolvedTheme === "dark",
      })}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <FaMoon size={20} className="text-blue-200" />
      ) : (
        <FaSun size={20} className="text-yellow-500" />
      )}
    </button>
  );
}
