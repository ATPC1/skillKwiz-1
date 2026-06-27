"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

interface LoginFormProps {
  onLogin: (userType: "employer" | "employee") => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState<"employer" | "employee">("employee");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(userType);
  };

  return (
    <div className="text-white">
      {/* Toggle Tab */}
      <div className="flex bg-[#253253] p-1.5 rounded-2xl mb-6 border border-gray-600/60">
        <button
          type="button"
          onClick={() => setIsSignUp(false)}
          className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
            !isSignUp
              ? "bg-[#4ECDC4] text-black shadow-md"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => setIsSignUp(true)}
          className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
            isSignUp
              ? "bg-[#4ECDC4] text-black shadow-md"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Sign Up
        </button>
      </div>

      <h1 className="text-3xl font-semibold text-center mb-2">
        {isSignUp ? "Create Account" : "Login"}
      </h1>
      <p className="text-center text-gray-300 mb-8">
        {isSignUp ? "Sign up to register and take assessments" : "Sign in to access your account"}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Type Selection */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            onClick={() => setUserType("employee")}
            className={`flex items-center justify-center py-3 px-6 rounded-md text-white transition-all ${
              userType === "employee"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-[#4ECDC4]"
                : "bg-gradient-to-r from-gray-500/80 to-gray-600/80"
            }`}
          >
            <span className="mr-2">👤</span> Employee
          </button>
          <button
            type="button"
            onClick={() => setUserType("employer")}
            className={`flex items-center justify-center py-3 px-6 rounded-md text-white transition-all ${
              userType === "employer"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-[#4ECDC4]"
                : "bg-gradient-to-r from-gray-500/80 to-gray-600/80"
            }`}
          >
            <span className="mr-2">🏢</span> Employer
          </button>
        </div>

        {isSignUp && (
          <div>
            <label htmlFor="name" className="block mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
              required={isSignUp}
            />
          </div>
        )}

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-[#333333] rounded pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-[#333333] rounded pl-10 pr-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-400" />
              ) : (
                <Eye className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        {!isSignUp && (
          <div className="text-right">
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
              Forgot Password?
            </a>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90 font-bold text-lg transition-all shadow-lg"
        >
          {isSignUp ? "Sign Up & Register" : "Login"}
        </button>

        {/* Toggle Link */}
        <div className="text-center mt-4">
          <p className="text-gray-300">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#4ECDC4] hover:underline font-bold bg-transparent border-none cursor-pointer"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
