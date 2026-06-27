"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const indicatorClasses = (index: number) =>
    `h-1.5 rounded-full transition-all duration-300 ${
      hoveredIndex === index ? "w-64 bg-[#00418d]" : "w-24 bg-[#c3dfff]"
    }`;

  const blogPosts = [
    {
      img: "/images/blogpage/1.png",
      title: "The Importance of Upskilling in Today's Job Market",
      subtitle: "Why Upskilling Matters in 2025",
    },
    {
      img: "/images/blogpage/2.png",
      title: "How Gamified Learning Enhances Skill Retention",
      subtitle: "The Psychology Behind Gamification",
    },
    {
      img: "/images/blogpage/3.png",
      title: "Soft Skills vs. Hard Skills: What Matters More?",
      subtitle: "The Difference Between Soft and Hard Skills",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 flex justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 font-bold text-sm shadow-md transition-all hover:-translate-x-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Mastering Knowledge & Growth
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-8">
              In a world of constant change, continuous learning is the key to
              success...
            </p>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mb-10">
              {blogPosts.map((_, index) => (
                <div key={index} className={indicatorClasses(index)} />
              ))}
            </div>

            {/* Official Downloadable Resources Blue Links Callout */}
            <div className="bg-gradient-to-r from-[#00418d] via-blue-700 to-[#335f92] rounded-3xl p-8 text-white mb-14 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-300/30">
              <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  Official Resources & Benchmarks
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold mt-3 tracking-tight">
                  SkillKwiz Enterprise Assessment Guidelines
                </h3>
                <p className="text-sm md:text-base text-blue-100 mt-1 max-w-xl">
                  Click the links below to instantly download our official validation framework, security specifications, and dummy evaluation files.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <a
                  href="/downloads/SkillKwiz-Assessment-Overview.txt"
                  download="SkillKwiz-Assessment-Overview.txt"
                  className="px-6 py-3 bg-white text-[#00418d] hover:bg-amber-50 font-bold text-sm rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 hover:scale-105"
                >
                  Download Overview
                </a>
                <a
                  href="/downloads/SkillKwiz-Sample-Report.txt"
                  download="SkillKwiz-Sample-Report.txt"
                  className="px-6 py-3 bg-blue-500/30 hover:bg-blue-500/50 text-white font-semibold text-sm rounded-xl border border-white/30 backdrop-blur-md transition-all duration-200 hover:scale-105"
                >
                  Sample Report
                </a>
              </div>
            </div>

            {/* Featured Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative mb-4 overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={380}
                      height={240}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                  <p className="text-sm text-[#00418d] font-medium">
                    {post.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Buttons */}
          {/* <div className="flex justify-center gap-4 mb-12">
            <button className="px-8 py-2 bg-[#00418d] text-white rounded-full">
              All Posts
            </button>
            <button className="px-8 py-2 bg-[#c3dfff] text-[#00418d] rounded-full">
              Latest
            </button>
          </div> */}

          {/* Secondary Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Blog Post 4 */}
            <div className="flex flex-col h-full">
              <div className="relative h-60 mb-4">
                <Image
                  src="/images/blogpage/4.png"
                  alt="Tech skills"
                  width={580}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Top 10 Tech Skills That Can Land You a High-Paying Job
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Why Tech Skills Are Essential in 2025
              </p>
            </div>

            {/* Blog Post 5 */}
            <div className="flex flex-col h-full">
              <div className="relative h-60 mb-4">
                <Image
                  src="/images/blogpage/5.png"
                  alt="Learning motivation"
                  width={580}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                How to Stay Motivated While Learning New Skills
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Why Motivation Is Key to Skill Development
              </p>
            </div>
          </div>

          {/* Knowledge Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Mastering Knowledge & Growth
            </h2>
            <p className="max-w-4xl mb-12">
              Knowledge is the foundation of growth. Embrace new ideas, sharpen
              your skills, and stay inspired with insights that empower you to
              achieve more in both your personal and professional journey.
            </p>

            {/* Knowledge Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 mb-6">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src="/images/blogpage/6.png"
                    alt="Online learning"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Trends to Watch in 2025
                  </p>
                  <h3 className="text-lg font-bold">
                    The Future of Online Learning
                  </h3>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src="/images/blogpage/7.png"
                    alt="Career skills"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Trends to Watch in 2025
                  </p>
                  <h3 className="text-lg font-bold">
                    5 Essential Skills to Boost Your Career in 2025
                  </h3>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src="/images/blogpage/8.png"
                    alt="Gamification"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Trends to Watch in 2025
                  </p>
                  <h3 className="text-lg font-bold">
                    How Gamification Enhances Learning & Engagement
                  </h3>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src="/images/blogpage/1.png"
                    alt="Career boost"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Trends to Watch in 2025
                  </p>
                  <h3 className="text-lg font-bold">
                    5 Essential Skills to Boost Your Career in 2025
                  </h3>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src="/images/blogpage/4.png"
                    alt="Microlearning"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Trends to Watch in 2025
                  </p>
                  <h3 className="text-lg font-bold">
                    The Power of Microlearning
                  </h3>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src="/images/blogpage/2.png"
                    alt="Learning revolution"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Trends to Watch in 2025
                  </p>
                  <h3 className="text-lg font-bold">
                    Revolutionizing the Way We Learn
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
