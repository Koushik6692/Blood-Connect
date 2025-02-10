"use client";
import { useState, useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="relative">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="fixed top-4 right-4 z-50 bg-gray-200 px-3 py-1 rounded-md shadow-lg hover:bg-gray-300"
      >
        Toggle Theme
      </button>
      {children}
    </div>
  );
}
