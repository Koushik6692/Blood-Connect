"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="md:w-64 bg-white shadow-md p-4 fixed h-full top-0 left-0 transform transition-transform duration-300 ease-in-out"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}>
      <button className="md:hidden mb-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}
      </button>
      <nav className="space-y-4">
        <Link href="/dashboard" className="block p-2 hover:bg-red-100">Dashboard</Link>
        <Link href="/donate" className="block p-2 hover:bg-red-100">Donate Blood</Link>
        <Link href="/request" className="block p-2 hover:bg-red-100">Request Blood</Link>
        <Link href="/camps" className="block p-2 hover:bg-red-100">Donation Camps</Link>
      </nav>
    </aside>
  );
}
