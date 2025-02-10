// import React from "react";
// import { Button } from "@/components/ui/button";
// import { ActionButton, Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { Heart, Users, Calendar } from "lucide-react";

// export default function Homepage() {
//   return (
//     <div className="min-h-screen bg-red-50">
//       {/* Hero Section */}
//       <div className="text-center py-20 bg-red-600 text-white">
//         <h1 className="text-5xl font-bold">Donate Blood, Save Lives</h1>
//         <p className="mt-4 text-lg">Join our mission to make blood accessible for those in need.</p>
//         <div className="mt-6 flex justify-center gap-4">
//         <ActionButton label="Donate Blood" path="/login" />
// <ActionButton label="Request Blood" path="/login" />

//         </div>
//       </div>
      
//       {/* Stats Section */}
//       <div className="flex justify-center gap-10 my-10">
//         <Card className="p-4 text-center">
//           <Heart className="text-red-600 w-10 h-10 mx-auto" />
//           <h2 className="text-2xl font-bold">10,000+</h2>
//           <p>Blood Donations</p>
//         </Card>
//         <Card className="p-4 text-center">
//           <Users className="text-red-600 w-10 h-10 mx-auto" />
//           <h2 className="text-2xl font-bold">5,000+</h2>
//           <p>Registered Donors</p>
//         </Card>
//         <Card className="p-4 text-center">
//           <Calendar className="text-red-600 w-10 h-10 mx-auto" />
//           <h2 className="text-2xl font-bold">100+</h2>
//           <p>Upcoming Events</p>
//         </Card>
//       </div>
      
//       {/* Events Section */}
//       <div className="text-center my-10">
//         <h2 className="text-3xl font-bold text-red-600">Upcoming Blood Donation Camps</h2>
//         <p className="mt-2 text-gray-600">Join a blood donation event near you and make a difference.</p>
//       </div>
      
//       {/* Footer */}
//       <footer className="bg-red-600 text-white text-center py-6">
//         <p>&copy; 2025 BloodConnect | Saving Lives Together</p>
//       </footer>
//     </div>
//   );
// }
"use client"
import React from "react";
import Header from "@/components/header";
import { DarkModeProvider, useDarkMode } from "@/contexts/DarkModeContext"; // ✅ Use the custom hook
import { FaHeart, FaUsers, FaHandHoldingHeart, FaClock, FaCheckCircle } from "react-icons/fa";

import { GiDroplets } from "react-icons/gi";
import Link from "next/link";


const Home = () => {
  const { setIsDarkMode, isDarkMode } = useDarkMode();

  const stats = [
    { icon: FaUsers, count: "10,000+", label: "Active Donors" },
    { icon: FaHandHoldingHeart, count: "15,000+", label: "Lives Saved" },
    { icon: FaClock, count: "24/7", label: "Emergency Support" },
    { icon: FaCheckCircle, count: "100%", label: "Safe Donations" }
  ];

  return (
    <div className={`pt-20 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 lg:py-32 animate-gradient-x">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Every Drop Counts, Every Life Matters</h1>
            <p className="text-lg sm:text-xl mb-8 text-red-100">Join our community of lifesavers and make a difference today. Your donation can save up to three lives.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
  href="/login"
  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 inline-block text-center"
>
  Become a Donor
</Link>

<Link
  href="/login"
  className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors duration-200 inline-block text-center"
>
  Find Blood
</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center p-6 rounded-lg ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-red-50"} hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                <stat.icon className="w-10 h-10 text-red-600 mx-auto mb-4 transform transition-transform hover:rotate-12" />
                <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{stat.count}</h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Why Donate Blood?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 transform transition-transform hover:rotate-12">
                <FaHeart className="text-red-600 w-6 h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Save Lives</h3>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>Your donation can help accident victims, surgery patients, and those battling serious illnesses.</p>
            </div>
            <div className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 transform transition-transform hover:rotate-12">
                <FaUsers className="text-red-600 w-6 h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Community Impact</h3>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>Join a network of donors making a real difference in your local community.</p>
            </div>
            <div className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 transform transition-transform hover:rotate-12">
                <FaHandHoldingHeart className="text-red-600 w-6 h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Health Benefits</h3>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>Regular blood donation can improve your cardiovascular health and reduce the risk of certain diseases.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white animate-pulse-slow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Join our platform today and become part of a community dedicated to saving lives through blood donation.</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200">Register Now</button>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <DarkModeProvider>
      <div className="min-h-screen">
        <Header />
        <Home />
      </div>
    </DarkModeProvider>
  );
};

export default App;