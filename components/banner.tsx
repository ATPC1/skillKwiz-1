import Image from "next/image"

export default function Banner() {
  return (
    <div className="relative">
      {/* Banner images */}
      <div className="banner_div">
        <Image
          src="/placeholder.svg?height=900&width=1920"
          alt="Banner background"
          width={1920}
          height={900}
          className="w-full z-10 absolute"
        />
        <Image
          src="/placeholder.svg?height=900&width=1920"
          alt="Banner overlay"
          width={1920}
          height={900}
          className="w-full h-[900px] z-10 absolute top-[300px]"
        />
        <Image
          src="/placeholder.svg?height=500&width=600"
          alt="Banner element"
          width={600}
          height={500}
          className="z-10 absolute top-[100px] right-[40px]"
        />
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Banner bottom"
          width={1920}
          height={400}
          className="z-10 absolute top-[1000px]"
        />

        {/* Banner content */}
        <div className="absolute z-50 text-white w-1/2 p-10 top-[70px]">
          <h2 className="text-5xl mb-4">Master Your Skills with Engaging Quizzes!</h2>
          <p className="text-4xl mb-6">
            Interactive, fun, and personalized learning designed to boost your knowledge effortlessly.
          </p>
          <button className="text-white py-2.5 px-4 rounded-full bg-[#f73d5c] text-xl cursor-pointer hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
        </div>

        {/* Spacer div */}
        <div className="relative h-[190vh]"></div>
      </div>
    </div>
  )
}

