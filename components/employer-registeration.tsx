"use client";

import { useState } from "react";

interface EmployerRegistrationProps {
  onSubmit: () => void;
}

export default function EmployerRegistration({
  onSubmit,
}: EmployerRegistrationProps) {
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [authorized, setAuthorized] = useState<"yes" | "no" | null>(null);

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Employer Registration
      </h1>

      <div className="space-y-6">
        {/* Name Fields */}
        <div>
          <label className="block mb-2">Name</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Company Field */}
        <div>
          <label className="block mb-2">Company</label>
          <input
            type="text"
            placeholder="Enter Company Name"
            className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-2">Email</label>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 bg-[#333333] rounded-l px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              className="bg-[#333333] rounded-r px-4 py-3 text-white hover:bg-[#444444]"
              onClick={() => setEmailOtpSent(true)}
            >
              Get OTP
            </button>
          </div>
          {emailOtpSent && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-40 bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block mb-2">Phone</label>
          <div className="flex">
            <input
              type="tel"
              placeholder="Enter Phone No."
              className="flex-1 bg-[#333333] rounded-l px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              className="bg-[#333333] rounded-r px-4 py-3 text-white hover:bg-[#444444]"
              onClick={() => setPhoneOtpSent(true)}
            >
              Get OTP
            </button>
          </div>
          {phoneOtpSent && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-40 bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* Authorization */}
        <div>
          <label className="block mb-2">Are you Authorized to Pay ?</label>
          <div className="flex items-center space-x-6 mb-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="auth-yes"
                name="authorized"
                className="mr-2"
                onChange={() => setAuthorized("yes")}
                checked={authorized === "yes"}
              />
              <label htmlFor="auth-yes">Yes</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="auth-no"
                name="authorized"
                className="mr-2"
                onChange={() => setAuthorized("no")}
                checked={authorized === "no"}
              />
              <label htmlFor="auth-no">No</label>
            </div>
          </div>
          {authorized === "yes" && (
            <input
              type="text"
              placeholder="Authorization Details"
              className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
            />
          )}
        </div>

        {/* Department */}
        <div>
          <label className="block mb-2">Department</label>
          <div className="relative">
            <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
              <option>Human Resources</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>Finance</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onSubmit}
            className="px-10 py-2 rounded bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90"
          >
            Submit
          </button>
          <button className="px-10 py-2 rounded bg-[#333333] text-white hover:bg-[#444444]">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
