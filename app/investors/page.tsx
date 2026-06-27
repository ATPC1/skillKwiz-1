"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, TrendingUp, Shield, Users, Award, Download, Building2, CheckCircle2 } from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcfbf9] via-amber-50/20 to-[#fcfbf9] text-slate-800 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-amber-200/80 text-[#69226F] font-bold text-sm shadow-md hover:bg-amber-50 transition-all hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#003b8e] via-[#00418d] to-[#69226F] rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden mb-16 border border-white/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-300/30">
              <TrendingUp className="w-4 h-4" />
              <span>Investor Relations</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Shaping the Future of AI-Proctored Talent Assessment
            </h1>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-8">
              SkillKwiz is revolutionizing global workforce evaluation with humanoid biometric screening and scalable technical benchmarking. Join us in transforming how enterprises hire and upskill talent.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/downloads/SkillKwiz-Assessment-Overview.txt"
                download="SkillKwiz-Investor-Deck.txt"
                className="px-8 py-3.5 rounded-xl bg-[#f7d03e] text-black font-extrabold text-sm hover:bg-amber-300 transition-all shadow-lg flex items-center gap-2 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download Investor Deck (2026)</span>
              </a>
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 backdrop-blur-md transition-all"
              >
                Explore Assessment Portal
              </Link>
            </div>
          </div>
        </div>

        {/* Financial & Growth Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-4">
            Key Growth Highlights
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10 text-sm">
            Our consistent trajectory demonstrates strong enterprise adoption and unparalleled assessment reliability across global testing centers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-lg text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#00418d]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#69226F] mb-1">1,000+</h3>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Validated Tests</p>
              <p className="text-xs text-slate-500 mt-2">Comprehensive tech & domain libraries</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-lg text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#ff9d00]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#69226F] mb-1">60%</h3>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Faster Hiring</p>
              <p className="text-xs text-slate-500 mt-2">Reduction in recruitment turnaround</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-lg text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#69226F] mb-1">99.9%</h3>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Proctoring Accuracy</p>
              <p className="text-xs text-slate-500 mt-2">Zero fraud via humanoid AI screening</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-lg text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#69226F] mb-1">250+</h3>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Enterprise Clients</p>
              <p className="text-xs text-slate-500 mt-2">Global fortune 500 integrations</p>
            </div>
          </div>
        </div>

        {/* Governance & Leadership Section */}
        <div className="bg-white rounded-3xl p-10 border border-amber-100 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-[#69226F] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Leadership Vision
            </span>
            <h3 className="text-2xl font-bold text-slate-800 mt-3 mb-3">
              Backed by 24+ Years of Industry Leadership
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Under the guidance of CEO Venugopal B A, SkillKwiz maintains strict corporate governance, transparent auditing, and rigorous data privacy compliance across all evaluation portals.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> ISO/IEC 27001 Certified Security Centers
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> GDPR & SOC-2 Type II Compliant Infrastructure
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 text-center shrink-0 w-full md:w-80">
            <h4 className="text-lg font-bold text-[#00418d] mb-2">Inquiries & Reports</h4>
            <p className="text-xs text-slate-600 mb-4">For corporate governance documents or quarterly shareholder meetings:</p>
            <a
              href="mailto:investors@skillkwiz.com"
              className="block w-full py-2.5 rounded-xl bg-[#00418d] text-white font-bold text-sm hover:bg-blue-800 transition-colors shadow"
            >
              Contact Investor Relations
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
