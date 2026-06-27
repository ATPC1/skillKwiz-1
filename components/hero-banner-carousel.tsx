"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Award, Zap } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Hiring Simplified",
    subtitle: "Assessments in Secure Centers & Verified Skills",
    description: "Empowering companies to recruit with absolute confidence through validated, proctored testing environments and real-time skill analytics.",
    ctaText: "Take Assessment",
    ctaLink: "/#assessment",
    secondaryCtaText: "Explore Services",
    secondaryCtaLink: "/services",
    icon: <ShieldCheck className="w-12 h-12 text-[#ff9d00]" />,
    badgeText: "TESTED & VERIFIED CERTIFICATION",
    bgGradient: "from-amber-900/90 via-slate-900/85 to-[#335f92]/90",
  },
  {
    id: 2,
    title: "The World's Largest Skill Library",
    subtitle: "Over 1,000+ Validated Technical & Domain Tests",
    description: "Comprehensive assessment coverage spanning C#, SQL Server, React, Web 2.0, Java, Data Science, and Cognitive Aptitude benchmarks.",
    ctaText: "Browse Library",
    ctaLink: "/services",
    secondaryCtaText: "View Sample Reports",
    secondaryCtaLink: "/#reports",
    icon: <Award className="w-12 h-12 text-[#48caed]" />,
    badgeText: "INDUSTRY STANDARD EVALUATIONS",
    bgGradient: "from-[#00418d]/90 via-slate-900/85 to-purple-950/90",
  },
  {
    id: 3,
    title: "Empowering Workforce Development",
    subtitle: "Targeted Upskilling & Precision Gap Analysis",
    description: "Identify organizational talent gaps and accelerate employee career growth with benchmarked scoring and actionable learning insights.",
    ctaText: "Candidate Portal",
    ctaLink: "/#candidate",
    secondaryCtaText: "Read Insights",
    secondaryCtaLink: "/blog",
    icon: <Zap className="w-12 h-12 text-[#f73c5c]" />,
    badgeText: "CONTINUOUS GROWTH ROADMAPS",
    bgGradient: "from-rose-950/90 via-slate-900/85 to-[#335f92]/90",
  },
  {
    id: 4,
    title: "AI-Powered Evaluation Centers",
    subtitle: "Reduce Recruitment Turnaround Time by 60%",
    description: "Automated proctoring, anti-cheating validation, instant report generation, and humanoid candidate scoring designed for modern HR teams.",
    ctaText: "Schedule Demo",
    ctaLink: "/about",
    secondaryCtaText: "Contact Sales",
    secondaryCtaLink: "/about",
    icon: <CheckCircle2 className="w-12 h-12 text-[#2a8bea]" />,
    badgeText: "NEXT-GEN RECRUITMENT SOLUTIONS",
    bgGradient: "from-slate-950/95 via-[#00418d]/85 to-amber-950/90",
  },
];

export default function HeroBannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden pt-20 flex items-center justify-center">
      {/* Background Video / Graphic layer */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
        </video>
        {/* Dynamic color gradient overlay matching active slide */}
        <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient} transition-all duration-1000 backdrop-blur-[2px]`} />
      </div>

      {/* Decorative Wax Seal / Stamp */}
      <div className="absolute top-28 right-8 md:right-16 z-20 hidden md:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-red-600 via-rose-700 to-red-900 text-white shadow-2xl border-4 border-amber-300 transform rotate-12 animate-pulse">
        <span className="text-[10px] font-black tracking-widest text-amber-200">OFFICIAL</span>
        <span className="text-sm font-extrabold tracking-wider mt-0.5">TESTED</span>
        <span className="text-[9px] font-bold tracking-tight text-amber-100 mt-0.5">VERIFIED</span>
      </div>

      {/* Carousel Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-12 flex flex-col justify-center">
        {slides.map((slide, index) => {
          if (index !== currentSlide) return null;
          return (
            <div
              key={slide.id}
              className="flex flex-col items-start text-left animate-in fade-in slide-in-from-right-8 duration-700"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-yellow-300 text-xs md:text-sm font-bold tracking-wider uppercase mb-6 shadow-sm">
                {slide.icon}
                <span>{slide.badgeText}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl md:text-3xl font-semibold text-amber-200 mb-6 drop-shadow">
                {slide.subtitle}
              </h2>

              {/* Description */}
              <p className="text-base md:text-xl text-slate-100 max-w-3xl leading-relaxed mb-8 font-normal drop-shadow">
                {slide.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={slide.ctaLink}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#ff9d00] via-[#f73c5c] to-[#69226F] text-white text-base font-bold rounded-full shadow-lg shadow-rose-900/30 hover:scale-105 transition-transform duration-200"
                >
                  {slide.ctaText}
                </Link>
                <Link
                  href={slide.secondaryCtaLink}
                  className="px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white text-base font-semibold rounded-full backdrop-blur-md border border-white/30 transition-all duration-200"
                >
                  {slide.secondaryCtaText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all transform hover:scale-110 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all transform hover:scale-110 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full h-2.5 ${
              index === currentSlide ? "w-8 bg-amber-400 shadow-md" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
