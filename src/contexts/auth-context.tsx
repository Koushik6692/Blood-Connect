"use client";
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define the type for authentication context
interface AuthContextType {
  user: any | null;
  setUser: Dispatch<SetStateAction<any | null>>;
}

// Create context with a correct type (instead of null)
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
