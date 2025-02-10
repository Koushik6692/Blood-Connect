"use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { DarkModeProvider, useDarkMode } from "@/contexts/DarkModeContext"; 
// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Logging in with:", { email, password });
//     router.push("/dashboard"); // Redirect after login
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg">
//         <h2 className="text-center text-2xl font-semibold text-red-600">Welcome Back!</h2>
//         <p className="text-center text-gray-600">Sign in to continue</p>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-red-500 focus:ring-red-500"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-red-500 focus:ring-red-500"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-md bg-red-600 py-2 text-white transition hover:bg-red-700"
//           >
//             Login
//           </button>
//         </form>

//         <div className="text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <Link href="/register" className="text-red-600 hover:underline">
//             Sign up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// const Login = () => {
//   const { setIsDarkMode, isDarkMode } = useDarkMode();

//   const { isDarkMode } = React.useContext(DarkModeContext);
//   const [userType, setUserType] = useState("patient");

//   return (
//     <div className={`min-h-screen pt-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"} flex items-center justify-center px-4`}>
//       <div className={`max-w-md w-full p-8 rounded-2xl shadow-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all duration-300`}>
//         <div className="text-center mb-8">
//           <FaUserCircle className={`w-16 h-16 mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`} />
//           <h2 className={`mt-4 text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Welcome Back</h2>
//           <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Please sign in to continue</p>
//         </div>

//         <div className="space-y-4 mb-6">
//           <div className="grid grid-cols-2 gap-4">
//             <label className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer ${userType === "patient" ? (isDarkMode ? "bg-red-600" : "bg-red-500") : (isDarkMode ? "bg-gray-700" : "bg-gray-100")} transition-all duration-200`}>
//               <input
//                 type="radio"
//                 name="userType"
//                 value="patient"
//                 checked={userType === "patient"}
//                 onChange={(e) => setUserType(e.target.value)}
//                 className="hidden"
//               />
//               <span className={`text-sm font-medium ${userType === "patient" ? "text-white" : (isDarkMode ? "text-gray-300" : "text-gray-600")}`}>Patient</span>
//             </label>
//             <label className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer ${userType === "donor" ? (isDarkMode ? "bg-red-600" : "bg-red-500") : (isDarkMode ? "bg-gray-700" : "bg-gray-100")} transition-all duration-200`}>
//               <input
//                 type="radio"
//                 name="userType"
//                 value="donor"
//                 checked={userType === "donor"}
//                 onChange={(e) => setUserType(e.target.value)}
//                 className="hidden"
//               />
//               <span className={`text-sm font-medium ${userType === "donor" ? "text-white" : (isDarkMode ? "text-gray-300" : "text-gray-600")}`}>Donor</span>
//             </label>
//             <label className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer ${userType === "hospital" ? (isDarkMode ? "bg-red-600" : "bg-red-500") : (isDarkMode ? "bg-gray-700" : "bg-gray-100")} transition-all duration-200`}>
//               <input
//                 type="radio"
//                 name="userType"
//                 value="hospital"
//                 checked={userType === "hospital"}
//                 onChange={(e) => setUserType(e.target.value)}
//                 className="hidden"
//               />
//               <span className={`text-sm font-medium ${userType === "hospital" ? "text-white" : (isDarkMode ? "text-gray-300" : "text-gray-600")}`}>Hospital</span>
//             </label>
//             <label className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer ${userType === "admin" ? (isDarkMode ? "bg-red-600" : "bg-red-500") : (isDarkMode ? "bg-gray-700" : "bg-gray-100")} transition-all duration-200`}>
//               <input
//                 type="radio"
//                 name="userType"
//                 value="admin"
//                 checked={userType === "admin"}
//                 onChange={(e) => setUserType(e.target.value)}
//                 className="hidden"
//               />
//               <span className={`text-sm font-medium ${userType === "admin" ? "text-white" : (isDarkMode ? "text-gray-300" : "text-gray-600")}`}>Admin</span>
//             </label>
//           </div>

//           <div>
//             <input
//               type="email"
//               placeholder="Email Address"
//               className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-red-500`}
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-red-500`}
//             />
//           </div>
//         </div>

//         <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
//           Sign In
//         </button>

//         <div className="mt-6 text-center">
//           <a href="#" className={`text-sm ${isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-gray-800"}`}>Forgot Password?</a>
//         </div>
//       </div>
//     </div>
//   );
// };
// ---------------------------------------------------------------------------------------------

'use client'; // ✅ Makes this a Client Component

import React, { useState, useContext } from "react";
import { useDarkMode } from "@/contexts/DarkModeContext"; // ✅ Import Dark Mode Hook
import { FaUserCircle } from "react-icons/fa"; // ✅ Fix missing import

const Login = () => {
  const { isDarkMode } = useDarkMode(); // ✅ Correct usage of dark mode
  const [userType, setUserType] = useState("patient");

  return (
    <div className={`min-h-screen pt-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"} flex items-center justify-center px-4`}>
      <div className={`max-w-md w-full p-8 rounded-2xl shadow-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all duration-300`}>
        <div className="text-center mb-8">
          <FaUserCircle className={`w-16 h-16 mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`} />
          <h2 className={`mt-4 text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Welcome Back</h2>
          <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Please sign in to continue</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            {["patient", "donor", "hospital", "admin"].map((type) => (
              <label
                key={type}
                className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer ${
                  userType === type ? (isDarkMode ? "bg-red-600" : "bg-red-500") : (isDarkMode ? "bg-gray-700" : "bg-gray-100")
                } transition-all duration-200`}
              >
                <input
                  type="radio"
                  name="userType"
                  value={type}
                  checked={userType === type}
                  onChange={(e) => setUserType(e.target.value)}
                  className="hidden"
                />
                <span className={`text-sm font-medium ${userType === type ? "text-white" : isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              </label>
            ))}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
          </div>
        </div>

        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
          Sign In
        </button>

        <div className="mt-6 text-center">
          <a href="#" className={`text-sm ${isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-gray-800"}`}>Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
