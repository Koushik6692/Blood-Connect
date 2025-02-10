"use client";

import React from "react";
import { useRouter } from "next/navigation";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export function ActionButton({ label, path }: { label: string; path: string }) {
  const router = useRouter();
  return (
    <button 
      className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700 transition" 
      onClick={() => router.push(path)}
    >
      {label}
    </button>
  );
}
