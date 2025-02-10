"use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark");
//   }, [theme]);

//   return (
//     <header className="bg-red-600 text-white py-4 px-6 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold">Blood Connect</Link>
//         <nav className="hidden md:flex space-x-6">
//           <Link href="/donate" className="hover:text-gray-200">Donate</Link>
//           <Link href="/request" className="hover:text-gray-200">Request</Link>
//           <Link href="/camps" className="hover:text-gray-200">Camps</Link>
//           <Link href="/about" className="hover:text-gray-200">About</Link>
//         </nav>
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             className="bg-gray-200 text-black px-3 py-1 rounded-md"
//           >
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </button>
//           <Link href="/login" className="bg-white text-red-600 px-4 py-2 rounded-md">
//             Login
//           </Link>
//           <Link href="/register" className="hidden md:inline bg-gray-200 text-red-600 px-4 py-2 rounded-md">
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

import React from "react";

import { useState, useEffect } from "react";
import {
  FaHeart,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaGlobe,
  FaUsers,
  FaHandHoldingHeart,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { GiDroplets } from "react-icons/gi";

import { createContext, ReactNode, useContext } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import Link from "next/link";

// Provide a proper default value

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const { isDarkMode, setIsDarkMode } = useDarkMode(); // ✅ Correct usage

  // ✅ Ensure context is used inside the component

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === "EN" ? "ES" : "EN");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Become a Donor", path: "/login" },
    { name: "Find Blood", path: "/login" },
    { name: "Emergency Requests", path: "#" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } shadow-lg transition-all duration-300 transform`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <div className="flex items-center scale-90 sm:scale-100">
              <GiDroplets className="h-8 w-8 text-red-600" />
              <FaHeart className="h-6 w-6 text-red-600 -ml-2" />
            </div>
            {/* <span
              className={`text-xl sm:text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              BloodConnect
            </span> */}

            <Link href="/">
              <span
                className={`text-xl sm:text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } cursor-pointer`}
              >
                BloodConnect
              </span>
            </Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } hover:text-red-600 transition-all duration-200 transform hover:scale-105 text-sm xl:text-base`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              } text-sm`}
            >
              <FaGlobe className="h-5 w-5 inline" />
              <span className="ml-1">{language}</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>
            <button className="bg-orange-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-orange-700 transition-all duration-200 text-sm animate-pulse">
              Emergency Request
            </button>
            <button className="bg-red-600 text-white px-4 py-2 sm:px-6 rounded-lg hover:bg-red-700 transition-all duration-200 text-sm transform hover:scale-105">
              Donate Now
            </button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {isOpen ? (
                <FaTimes className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <FaBars className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div
            className={`lg:hidden ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } pb-6 transition-all duration-300 ease-in-out transform animate-fadeIn`}
          >
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } hover:text-red-600 transition-all duration-200 px-4 py-1 text-sm sm:text-base`}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 sm:space-y-4 px-4 pt-4 border-t border-gray-200">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all duration-200 w-full text-sm sm:text-base">
                  Emergency Request
                </button>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all duration-200 w-full text-sm sm:text-base">
                  Donate Now
                </button>
                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={toggleLanguage}
                    className={`p-2 rounded-full ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <FaGlobe className="h-5 w-5 inline" />
                    <span className="ml-1">{language}</span>
                  </button>
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {isDarkMode ? (
                      <FaSun className="h-5 w-5" />
                    ) : (
                      <FaMoon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
