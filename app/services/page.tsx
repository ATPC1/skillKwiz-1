"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ArrowLeft } from "lucide-react";
import LoginForm from "@/components/login-form";
import EmployeeRegistration from "@/components/employee-registeration";
import ScheduleAssessment from "@/components/schedule-assessment";
import EmployerRegistration from "@/components/employer-registeration";
import EmployerProfile from "@/components/employer-profile";
import EmployerAssessmentRequest from "@/components/employer-assessment-request";
import EmployerCandidateList from "@/components/employer-candidate-list";
import SuccessMessage from "@/components/success-message";

export default function ServicesPage() {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"employer" | "employee" | null>(
    null
  );

  // Registration success states
  const [employeeRegistrationSuccess, setEmployeeRegistrationSuccess] =
    useState(false);
  const [employerRegistrationSuccess, setEmployerRegistrationSuccess] =
    useState(false);

  // Screen states
  const [employeeScreen, setEmployeeScreen] = useState<
    "registration" | "assessment"
  >("registration");
  const [employerScreen, setEmployerScreen] = useState<
    "registration" | "profile" | "assessment" | "candidates"
  >("registration");

  // Handle login
  const handleLogin = (type: "employer" | "employee") => {
    setIsLoggedIn(true);
    setUserType(type);

    // Set initial screen based on user type
    if (type === "employer") {
      // In a real app, check if user has completed registration
      // For demo, we'll assume new users need to register
      setEmployerScreen("registration");
    } else {
      setEmployeeScreen("registration");
    }
  };

  // Handle employee registration completion
  const handleEmployeeRegistrationComplete = () => {
    setEmployeeRegistrationSuccess(true);
  };

  // Handle employer registration completion
  const handleEmployerRegistrationComplete = () => {
    setEmployerRegistrationSuccess(true);
  };

  // Continue after employee registration success
  const continueToEmployeeAssessment = () => {
    setEmployeeRegistrationSuccess(false);
    setEmployeeScreen("assessment");
  };

  // Continue after employer registration success
  const continueToEmployerProfile = () => {
    setEmployerRegistrationSuccess(false);
    setEmployerScreen("profile");
  };

  return (
    <div className="min-h-screen bg-[#050e2d] relative overflow-x-hidden pb-16">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/background.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 pt-28">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back to Home Button */}
          <div className="mb-6 flex justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm backdrop-blur-md shadow-lg transition-all hover:-translate-x-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {!isLoggedIn ? (
            // Login Form
            <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm max-w-md mx-auto">
              <LoginForm onLogin={handleLogin} />
            </div>
          ) : (
            // Logged in content
            <>
              {/* Back button - only shown on assessment screen */}
              {userType === "employee" && employeeScreen === "assessment" && (
                <button
                  onClick={() => setEmployeeScreen("registration")}
                  className="text-white mb-4"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}

              {/* Content Panel */}
              {userType === "employee" ? (
                <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm">
                  {employeeRegistrationSuccess ? (
                    <SuccessMessage
                      title="Registration Successful!"
                      message="Your employee account has been created successfully. You can now proceed to schedule your assessment."
                      buttonText="Continue to Assessment"
                      onContinue={continueToEmployeeAssessment}
                    />
                  ) : employeeScreen === "registration" ? (
                    <EmployeeRegistration
                      onNext={handleEmployeeRegistrationComplete}
                    />
                  ) : (
                    <ScheduleAssessment />
                  )}
                </div>
              ) : (
                <>
                  {/* Employer Screens */}
                  {employerRegistrationSuccess ? (
                    <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm">
                      <SuccessMessage
                        title="Registration Successful!"
                        message="Your employer account has been created successfully. You can now access all employer features."
                        buttonText="Continue to Profile"
                        onContinue={continueToEmployerProfile}
                      />
                    </div>
                  ) : employerScreen === "registration" ? (
                    <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm">
                      <EmployerRegistration
                        onSubmit={handleEmployerRegistrationComplete}
                      />
                    </div>
                  ) : (
                    <>
                      {/* Employer Navigation Tabs */}
                      <div className="bg-[#b8bdc7] rounded-lg mb-4">
                        <div className="grid grid-cols-3 gap-1">
                          <button
                            onClick={() => setEmployerScreen("profile")}
                            className={`py-3 px-4 text-center text-white font-medium ${
                              employerScreen === "profile"
                                ? "bg-[#2d5184] rounded-lg"
                                : ""
                            }`}
                          >
                            Profile
                          </button>
                          <button
                            onClick={() => setEmployerScreen("assessment")}
                            className={`py-3 px-4 text-center text-white font-medium ${
                              employerScreen === "assessment"
                                ? "bg-[#2d5184] rounded-lg"
                                : ""
                            }`}
                          >
                            Assessment Request
                          </button>
                          <button
                            onClick={() => setEmployerScreen("candidates")}
                            className={`py-3 px-4 text-center text-white font-medium ${
                              employerScreen === "candidates"
                                ? "bg-[#2d5184] rounded-lg"
                                : ""
                            }`}
                          >
                            Candidate List
                          </button>
                        </div>
                      </div>

                      {/* Employer Content */}
                      <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm">
                        {employerScreen === "profile" && <EmployerProfile />}
                        {employerScreen === "assessment" && (
                          <EmployerAssessmentRequest />
                        )}
                        {employerScreen === "candidates" && (
                          <EmployerCandidateList />
                        )}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
