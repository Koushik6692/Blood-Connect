"use client";
import React, { createContext, useContext, useState } from "react";

// Define the context type
type DarkModeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
};

// ✅ Export DarkModeContext
export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// ✅ Export DarkModeProvider
export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// ✅ Export a custom hook (optional)
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
