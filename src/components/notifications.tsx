"use client";
import { useState } from "react";

export default function Notifications() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-100 text-yellow-900 text-center p-3 flex justify-between items-center">
      <span>⚠️ Urgent: O- blood needed at City Hospital!</span>
      <button onClick={() => setIsVisible(false)} className="text-yellow-900 font-bold px-3">
        ✖
      </button>
    </div>
  );
}
