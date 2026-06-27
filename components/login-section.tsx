"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, ArrowRight, Lock, User, Mail, Building, Eye, EyeOff } from "lucide-react";

export default function LoginSection() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYouModal(true);
  };

  return (
    <section id="assessment" className="py-12 bg-gradient-to-b from-[#fcfbf9] via-amber-50/30 to-[#fcfbf9]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-100/80 flex flex-col md:flex-row">
          
          {/* Left Panel - Light Theme Illustration & Verified Credentials */}
          <div className="w-full md:w-1/2 p-10 bg-gradient-to-br from-amber-50 via-orange-50/50 to-white flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-amber-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#ff9d00]" />
                <span>Verified Assessment Portal</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800 leading-tight mb-4">
                Unlock Your Potential With <span className="text-[#69226F]">SkillKwiz</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Join thousands of certified professionals and global enterprises using humanoid proctored assessments to validate skills and accelerate careers.
              </p>
            </div>

            {/* Light Theme Image */}
            <div className="relative my-4 flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/20 to-rose-200/20 rounded-2xl filter blur-xl transform -rotate-3"></div>
              <Image
                src="/images/homepage/futurism-perspective-digital-nomads-lifestyle 1.png"
                alt="Skill assessment light theme graphic"
                width={400}
                height={300}
                className="relative z-10 w-full max-w-[320px] h-auto object-contain rounded-2xl shadow-md transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="pt-6 border-t border-amber-200/50 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> AI Proctored
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Instant Reports
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Secure
              </span>
            </div>
          </div>

          {/* Right Panel - Login & Sign Up Form */}
          <div className="w-full md:w-1/2 p-10 bg-white flex flex-col justify-center">
            
            {/* Toggle Tab */}
            <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8 border border-slate-200/60">
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                  !isSignUp
                    ? "bg-white text-[#69226F] shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                  isSignUp
                    ? "bg-white text-[#69226F] shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sign Up
              </button>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              {isSignUp ? "Create Your Candidate Account" : "Welcome Back to SkillKwiz"}
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              {isSignUp
                ? "Register to access 1,000+ validated tests and certifications."
                : "Enter your verified credentials to access your assessment dashboard."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pradeep Kishor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#69226F] transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#69226F] transition-all"
                  />
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company / Organization (Optional)
                  </label>
                  <div className="relative">
                    <Building className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. SkillKwiz Technologies"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#69226F] transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#69226F] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center text-xs text-slate-600 cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[#69226F] focus:ring-[#69226F] mr-2" />
                    Remember this device
                  </label>
                  <a href="#assessment" className="text-xs font-semibold text-[#69226F] hover:underline">
                    Forgot Password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 mt-2 bg-gradient-to-r from-[#69226F] via-[#9b34a3] to-[#f73c5c] text-white font-bold rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-xl hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{isSignUp ? "Create Verified Account" : "Sign In to Portal"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400 font-medium mb-4">— Or continue securely with —</p>
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowThankYouModal(true)}
                  className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all shadow-sm"
                  aria-label="Login with Google"
                >
                  <Image src="/images/homepage/google 1.svg" alt="Google" width={20} height={20} className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Thank You Popup Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-amber-100 transform animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-2">Thank You!</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Microsoft has authorized you to take an assessment for C#, SQL Server, Web 2.0, and React. Your credentials and report portal have been activated.
            </p>
            <button
              onClick={() => setShowThankYouModal(false)}
              className="w-full py-3 bg-gradient-to-r from-[#69226F] to-[#f73c5c] text-white font-bold rounded-xl shadow-md hover:opacity-95 transition-opacity"
            >
              Close & Continue
            </button>
          </div>
        </div>
      )}
    </section>
  );
}


