"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

interface EmployeeRegistrationProps {
  onNext: () => void;
}

export default function EmployeeRegistration({
  onNext,
}: EmployeeRegistrationProps) {
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Employee Registration
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

        {/* Upload Resume */}
        <div>
          <label className="block mb-2">Upload Resume</label>
          <label className="w-full bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] flex items-center justify-between cursor-pointer border border-gray-600 transition-colors">
            <div className="flex items-center truncate">
              <Upload className="w-5 h-5 mr-2 shrink-0 text-[#4ECDC4]" />
              <span className="truncate">{fileName ? fileName : "Upload your Resume (.pdf, .doc)"}</span>
            </div>
            {fileName && <span className="text-xs bg-[#4ECDC4] text-black px-2 py-1 rounded ml-2 font-semibold">Selected</span>}
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setFileName(e.target.files[0].name);
                }
              }}
            />
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onNext}
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
