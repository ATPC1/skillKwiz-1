import Image from "next/image";

export default function AuthenticateSkillsSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side stacked images */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px]">
            <div className="absolute top-0 left-0 w-[80%] h-[80%] transform -rotate-12 hover:-rotate-6 transition-transform duration-300 z-10">
              <Image
                src="/images/homepage/skills_1.png"
                alt="Professional working at night"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-0 left-[10%] w-[80%] h-[80%] transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/images/homepage/skills_2.png"
                alt="Professional in tech environment"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Center content */}
          <div className="w-full md:w-1/3 text-center my-8 md:my-0 z-20">
            <h2 className="text-3xl font-bold text-[#00418d] mb-4">
              Authenticate Skills,
              <br />
              Simplify Hiring
            </h2>
            <p className="text-gray-700">
              SkillKwiz ensures professionals are evaluated accurately in their
              chosen fields. Our secure testing centers provide authenticated
              skill assessments, giving you instant access to verified
              reports—eliminating the need for lengthy technical interviews.
            </p>
          </div>

          {/* Right side stacked images */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px]">
            <div className="absolute top-0 right-0 w-[80%] h-[80%] transform rotate-9 hover:rotate-6 transition-transform duration-300 z-10">
              <Image
                src="/images/homepage/skills_3.png"
                alt="Professional at workstation"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-0 right-[10%] w-[80%] h-[80%] transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/images/homepage/skills_4.png"
                alt="Business professional looking at digital interface"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
