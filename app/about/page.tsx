import Image from "next/image";
import Link from "next/link";
import { Play, ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#00418d] text-white relative overflow-hidden pt-28">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="mb-6 flex justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold text-sm backdrop-blur-md shadow-lg transition-all hover:-translate-x-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            ELEVATE YOUR BUSINESS
          </h1>
          <p className="text-center max-w-3xl mx-auto text-sm mb-8">
            Skill Assessments Done With The Utmost Knowledge, Integrity, Trust,
            Respect And Security. Our Objective Is To Provide You With Accurate
            Insights Into The Skill Levels Of Your Current And Prospective
            Workforce.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#f73e5d] text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
              Sign Up
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          {/* <div className="border-[#c3dfff] border-[20px] rounded-full h-[400px] w-[400px] absolute -right-32 top-1/2 -translate-y-1/2"></div> */}
          <div className="relative">
            <Image
              src="/images/homepage/home_globe.gif"
              alt="SkillKwiz assessment platform"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 auto-rows-min">
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] hover:h-[350px]">
            <Image
              src="/images/aboutpage/eye.gif"
              alt="Eye-if"
              width={200}
              height={200}
              className="w-auto h-auto max-h-32 object-contain mb-4"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300">
              OUR VISION
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-sm text-[#272727] group-hover:text-white text-center">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] hover:h-[350px]">
            {/* <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 border-2 border-[#00418d]">
              <div className="w-12 h-12 border-4 border-[#00418d] rounded-full relative">
                <div className="absolute w-6 h-6 bg-[#c3dfff] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div> */}
            <Image
              src="/images/aboutpage/mission.gif"
              alt="Eye-if"
              width={200}
              height={200}
              className="w-auto h-auto max-h-32 object-contain mb-4"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300">
              OUR MISSION
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-sm text-[#272727] group-hover:text-white text-center">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>

          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] hover:h-[350px]">
            {/* <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 border-2 border-[#00418d]">
              <div className="w-12 h-12 relative">
                <div className="absolute w-10 h-10 border-4 border-[#00418d] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-4 h-4 bg-[#c3dfff] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div> */}
            <Image
              src="/images/aboutpage/purpose.gif"
              alt="Eye-if"
              width={200}
              height={200}
              className="w-auto h-auto max-h-32 object-contain"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300">
              OUR PURPOSE
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-sm text-[#272727] group-hover:text-white text-center">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00418d] mb-6">
                Who We Are ?
              </h2>
              <p className="text-[#272727] mb-6">
                We are your partner in skill assessment. Our expertise lies in
                assessing skill levels in people and quantifying them...
              </p>
              <p className="text-sm text-[#272727] mb-4">
                "SkillKwiz has a single purpose and that is to create
                stakeholder value..."
              </p>
              <p className="text-sm text-[#272727]">
                -Venugopal B A<br />
                CEO, SkillKwiz
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center gap-4">
              <Image
                src="/images/aboutpage/about_who_we_are-0.png"
                alt="Team collaboration"
                height={200}
                width={100}
                className="rounded-lg w-auto h-auto animate-float-delay-2"
              />
              <Image
                src="/images/aboutpage/about_who_we_are-1.png"
                alt="Team collaboration"
                height={200}
                width={100}
                className="rounded-lg w-auto h-auto animate-float-delay-1"
              />
              <Image
                src="/images/aboutpage/about_who_we_are-2.png"
                alt="Team collaboration"
                height={200}
                width={100}
                className="rounded-lg w-auto h-auto animate-float-delay-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="bg-[#f73e5d] p-4">
                  <Image
                    src="/images/aboutpage/Venugopal.png?height=300&width=300"
                    alt="CEO"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-[#f73e5d] text-white text-center py-3 font-bold text-xl">
                  CEO
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-[#272727] mb-6">
                Venugopal B A, a veteran leader in the IT industry with
                experience spanning 24 years in senior leadership roles, has
                chosen to take on the mantle of leading SkillKwiz. His
                understanding of one of the key challenges faced by the services
                sector gave birth to the vision that is SkillKwiz today.
              </p>
              <p className="text-[#272727]">
                With a rich background in the technology industry, he aims to
                establish SkillKwiz as an AI first and foremost company. He is
                poised to take SkillKwiz to its next level of growth by turning
                it into a company that is shaped entirely by the market it
                serves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <video
              className="w-full h-auto rounded-lg"
              controls
              preload="none"
              poster="/images/aboutpage/about_video.png"
            >
              <source
                src="/images/aboutpage/about_video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#00418d] rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
