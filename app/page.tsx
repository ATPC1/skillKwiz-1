"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import LetterCarousel from "@/components/letter-carousel";
import HeroBannerCarousel from "@/components/hero-banner-carousel";

export default function HomePage() {
  const [scrollStage, setScrollStage] = useState(0);
  const [isCallCenterVisible, setIsCallCenterVisible] = useState(false);
  const callCenterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 100) {
        setScrollStage(0);
      } else if (scrollY < 400) {
        setScrollStage(1);
      } else {
        setScrollStage(2);
      }
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.2,
      rootMargin: "-100px",
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.target === callCenterRef.current) {
          setIsCallCenterVisible(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (callCenterRef.current) {
      observer.observe(callCenterRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbf9]">
      {/* Main container with relative positioning */}
      <div className="relative">
        {/* Interactive 4-Slide Hero Carousel intersecting header */}
        <HeroBannerCarousel />

        {/* Call Center Image - Overlapping the video from top and bottom */}
        <div
          ref={callCenterRef}
          className="absolute w-full h-[50vh] pointer-events-none"
          style={{
            top: "65vh",
            zIndex: 2,
          }}
        >
          <Image
            src="/images/homepage/call-center.png"
            alt="Call center agents with headsets"
            width={1920}
            height={980}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        {/* SkillKwiz Tag - Positioned below the call center image */}
        <div className="relative mt-[45vh] pt-12" style={{ zIndex: 3 }}>
          <div className="bg-gradient-to-r from-[#f6c648] to-[#ffd875] text-[#00418d] py-4 px-8 inline-block transform skew-x-12 -ml-4 shadow-md rounded-r-2xl border-y border-r border-amber-300">
            <div className="transform -skew-x-12">
              <h2 className="text-xl md:text-2xl font-black tracking-wide">
                SkillKwiz – Verified Skills, Simplified Hiring
              </h2>
            </div>
          </div>

          {/* Letter Carousel - Added right after the SkillKwiz tag */}
          <div className="mt-8 mb-12">
            <LetterCarousel />
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="bg-white relative" style={{ zIndex: 3 }}>
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
