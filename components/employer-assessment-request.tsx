"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

export default function EmployerAssessmentRequest() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "C++",
    "Python",
  ]);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold text-center mb-2">
        Employer Skill
      </h1>
      <h1 className="text-3xl font-semibold text-center mb-6">
        Assessment Request
      </h1>

      <div className="space-y-6">
        {/* Candidate Name */}
        <div>
          <label className="block mb-2">Candidate Name</label>
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

        {/* Candidate Email */}
        <div>
          <label className="block mb-2">Candidate Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Candidate Phone */}
        <div>
          <label className="block mb-2">Candidate Phone</label>
          <input
            type="tel"
            placeholder="Enter Phone No."
            className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Candidate ID */}
        <div>
          <label className="block mb-2">Candidate ID</label>
          <div className="relative">
            <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
              <option>PAN Card</option>
              <option>Aadhar Card</option>
              <option>Voter ID</option>
              <option>Passport</option>
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

        {/* Upload Resume */}
        <div>
          <label className="block mb-2">
            Upload Resume <span className="text-red-500">*</span>
          </label>
          <label className="w-full bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] flex items-center cursor-pointer">
            <Upload className="w-5 h-5 mr-2" />
            <span>Upload your Resume</span>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
          </label>
        </div>

        {/* Skills */}
        <div>
          <label className="block mb-2">Skills</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>Job Family</option>
                <option>IT</option>
                <option>Accounting</option>
                <option>Finance</option>
                <option>Law</option>
                <option>Pharmacy</option>
                <option>Architecture</option>
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
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>Skills Family</option>
                <option>Programming Languages</option>
                <option>Frameworks</option>
                <option>Databases</option>
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

          <div className="bg-[#333333] rounded p-4">
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white text-black px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Unit */}
        <div>
          <label className="block mb-2">Cost Unit</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>HR</option>
                <option>Finance</option>
                <option>Operations</option>
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
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>Talent Acquisition</option>
                <option>Recruitment</option>
                <option>Staffing</option>
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

          <div className="relative mb-4">
            <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
              <option>TA-BU1</option>
              <option>TA-BU2</option>
              <option>TA-BU3</option>
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

        {/* Credit Cards */}
        <div>
          <label className="block mb-2">Credit Cards</label>
          <div className="relative">
            <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
              <option>ICIC Card</option>
              <option>HDFC Card</option>
              <option>SBI Card</option>
              <option>Axis Card</option>
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

        {/* Authorization Text */}
        <div className="text-center text-sm">
          <p>
            I authorize Delos Infosystems Private Limited to debit the credit
            card account stated above for US $40 as payment for conducting the
            skill assessment of specified job candidate.
          </p>
        </div>
      </div>
    </div>
  );
}
