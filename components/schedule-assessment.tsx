"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Info, Calendar, Clock, CheckCircle2 } from "lucide-react";

export default function ScheduleAssessment() {
  const router = useRouter();
  const [selectedCompany, setSelectedCompany] = useState<string>("microsoft");
  const [showThankYouModal, setShowThankYouModal] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>("2026-04-18");
  const [endDate, setEndDate] = useState<string>("2026-04-25");

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold text-center mb-2">
        Schedule Assessment
      </h1>
      <p className="text-center text-gray-200 mb-6">
        Register for your preferred skill assessment slot
      </p>

      <div className="space-y-8">
        {/* Message */}
        <p className="text-center text-lg">
          Great!! multiple employers have authorised you to take a skin
          assessment with SkillKwizz . Choose one. You can revisit this page to
          schedule for others
        </p>

        {/* Company Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
              selectedCompany === "microsoft" ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedCompany("microsoft")}
          >
            <span
              className={`w-4 h-4 rounded-full ${
                selectedCompany === "microsoft" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            Microsoft
          </button>
          <button
            className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
              selectedCompany === "google" ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedCompany("google")}
          >
            <span
              className={`w-4 h-4 rounded-full ${
                selectedCompany === "google" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            Google
          </button>
          <button
            className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
              selectedCompany === "amazon" ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedCompany("amazon")}
          >
            <span
              className={`w-4 h-4 rounded-full ${
                selectedCompany === "amazon" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            Amazon
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
              selectedCompany === "facebook1" ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedCompany("facebook1")}
          >
            <span
              className={`w-4 h-4 rounded-full ${
                selectedCompany === "facebook1" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            Facebook
          </button>
          <button
            className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
              selectedCompany === "facebook2" ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedCompany("facebook2")}
          >
            <span
              className={`w-4 h-4 rounded-full ${
                selectedCompany === "facebook2" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            Facebook
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-[#2d5184]/80 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-6 h-6 text-white mt-1" />
          <p>
            Microsoft has authorized you to take an assessment for C#, SQL
            Server, Web2.0, and React.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Select Country</label>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
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

          <div>
            <label className="block mb-2">Select Zip Code</label>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>Enter your area's Zip code</option>
                <option>110001</option>
                <option>110002</option>
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

          <div>
            <label className="block mb-2">Select Testing Centre</label>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>Enter your Centre</option>
                <option>Centre 1</option>
                <option>Centre 2</option>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Select Date Range (From - To)</label>
              <div className="flex items-center gap-2 bg-[#333333] border border-gray-600 rounded px-3 py-2.5 text-white">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-transparent focus:outline-none text-sm text-white cursor-pointer flex-1"
                />
                <span className="text-[#4ECDC4] font-bold">to</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-transparent focus:outline-none text-sm text-white cursor-pointer flex-1"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Select Time</label>
              <div className="flex items-center bg-[#333333] border border-gray-600 rounded px-4 py-2.5 text-white">
                <input
                  type="text"
                  placeholder="03"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <span className="mx-1">|</span>
                <input
                  type="text"
                  placeholder="30"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <span className="mx-1">|</span>
                <input
                  type="text"
                  placeholder="PM"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <Clock className="ml-auto w-5 h-5 text-[#4ECDC4]" />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => setShowThankYouModal(true)}
            className="px-20 py-3 rounded-xl bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90 font-bold text-lg shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Thank You Confirmation Popup Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200 text-slate-800">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-amber-100 transform animate-in zoom-in-95 duration-200 relative">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-2">Thank You!</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Your assessment slot has been successfully scheduled from <strong className="text-black">{startDate}</strong> to <strong className="text-black">{endDate}</strong>. We have sent the proctoring details and portal access instructions to your registered email.
            </p>
            <button
              type="button"
              onClick={() => {
                setShowThankYouModal(false);
                router.push("/");
              }}
              className="w-full py-3.5 bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white font-bold rounded-xl shadow-md hover:opacity-95 transition-all text-base cursor-pointer"
            >
              Close & Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
