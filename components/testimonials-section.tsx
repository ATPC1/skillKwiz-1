"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Jennifer Cooper",
    title: "Startup Founder, TechFlow",
    quote:
      "SkillKwiz has transformed our hiring process. We've reduced our time-to-hire by 40% and improved candidate quality significantly. The detailed skill reports give us confidence in every hiring decision.",
    image: "/images/homepage/5.png",
  },
  {
    id: 2,
    name: "Michael Donovan",
    title: "HR Director, Global Systems",
    quote:
      "As an enterprise with hundreds of technical hires annually, SkillKwiz has been invaluable. Their comprehensive skill assessments and secure testing environment ensure we get accurate insights into candidate capabilities.",
    image: "/images/homepage/6.png",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Talent Acquisition, InnovateTech",
    quote:
      "The flexibility of SkillKwiz's platform is what sets it apart. We can customize assessments to our specific needs, and the detailed reports help us make data-driven hiring decisions every time.",
    image: "/images/homepage/6.png",
  },
  {
    id: 4,
    name: "David Chen",
    title: "CTO, FutureTech Solutions",
    quote:
      "The technical assessments from SkillKwiz have been spot-on. We're able to quickly identify candidates with the right skills, saving our engineering team countless hours of interview time.",
    image: "/images/homepage/5.png",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    title: "Recruiting Manager, Innovate Inc",
    quote:
      "SkillKwiz has become an essential part of our hiring toolkit. The platform is intuitive, the assessments are comprehensive, and the customer support is exceptional.",
    image: "/images/homepage/7.png",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const intervalRef = useRef(null);

  // Function to get visible testimonials based on active index
  const updateVisibleTestimonials = (index) => {
    const totalTestimonials = testimonials.length;

    // Calculate previous, current and next indices with wrapping
    const prevIndex = (index - 1 + totalTestimonials) % totalTestimonials;
    const nextIndex = (index + 1) % totalTestimonials;

    setVisibleTestimonials([
      testimonials[prevIndex],
      testimonials[index],
      testimonials[nextIndex],
    ]);
  };

  // Initialize visible testimonials
  useEffect(() => {
    updateVisibleTestimonials(activeIndex);

    // Auto-rotate testimonials
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Update visible testimonials when active index changes
  useEffect(() => {
    updateVisibleTestimonials(activeIndex);
  }, [activeIndex]);

  // Handle navigation
  const goToPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

    // Reset interval timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

    // Reset interval timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  const goToSlide = (index) => {
    setActiveIndex(index);

    // Reset interval timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#00418d]" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#00418d]" />
          </button>

          {/* Testimonial carousel */}
          <div className="flex justify-center items-center gap-4 mb-8 overflow-hidden px-4 h-[400px] md:h-[350px]">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`
                  bg-[#00418d] rounded-lg text-white transition-all duration-500 flex flex-col justify-start
                  ${
                    index === 1
                      ? "w-full md:w-[50%] h-[350px] p-6 z-20 shadow-lg"
                      : "w-0 md:w-[25%] h-[250px] p-3 opacity-70 z-10 shadow-md"
                  }
                `}
              >
                <div className="flex flex-col items-center mb-4">
                  <div
                    className={`rounded-full overflow-hidden mb-3 border-2 border-white
                      ${index === 1 ? "w-20 h-20" : "w-12 h-12"}
                    `}
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={index === 1 ? 80 : 48}
                      height={index === 1 ? 80 : 48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className={`font-bold ${
                      index === 1 ? "text-lg" : "text-sm"
                    }`}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    className={`${
                      index === 1 ? "text-sm" : "text-xs"
                    } text-gray-200`}
                  >
                    {testimonial.title}
                  </p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`fill-[#f6c648] text-[#f6c648] ${
                          index === 1 ? "w-4 h-4" : "w-3 h-3"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p
                  className={`text-center ${
                    index === 1 ? "text-sm" : "text-xs"
                  } ${index !== 1 ? "line-clamp-4" : ""}`}
                >
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#00418d]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
