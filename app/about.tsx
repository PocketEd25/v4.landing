import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="relative bg-[#132B70] text-white py-20 px-5 md:px-20 overflow-hidden">
      {/* Blurred background accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#98D4F8] rounded-full mix-blend-screen filter blur-[120px] opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#98D4F8] rounded-full mix-blend-screen filter blur-[120px] opacity-50"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#98D4F8] rounded-full mix-blend-screen filter blur-[150px] opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Top line + Heading */}
        <div className="flex justify-center items-center">
          <div className="bg-[#98D4F8] h-[150px] w-[2px]" />
        </div>
        <h2 className="text-[#98D4F8] mt-3 text-sm tracking-widest uppercase">
          About Us
        </h2>
        <h1 className="it text-5xl md:text-6xl mt-3 font-bold">
          Empowering Learners
        </h1>

        {/* 3-column layout for desktop, 1-column for tablet and mobile */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left - Our Story */}
          <div className="text-left">
            <h3 className="it font-bold text-2xl mb-4">Our Story</h3>
            <p className="font-light mb-5">
              Every resource we provide is crafted with clarity and
              understanding for all.
            </p>
            <p className="font-light leading-relaxed mb-6">
              At the heart of our organization is a simple mission: to make
              financial education accessible to everyone. What began as a small
              initiative to help individuals understand money management has
              grown into a trusted learning community where knowledge meets
              empowerment. For decades, we've been guiding students,
              professionals, and lifelong learners to build confidence in
              handling personal and professional finances.
            </p>
            <button className="bg-[#FFD600] text-black font-medium px-5 py-2 rounded-md hover:bg-[#e6c200] transition">
              Learn More
            </button>
          </div>

          {/* Center - Image - Hidden on medium screens, visible on large */}
          <div className="flex justify-center lg:flex">
            <Image
              src="/image2.png"
              alt="About Us Illustration"
              width={3000}
              height={3000}
              className="max-w-[600px] h-auto"
            />
          </div>

          {/* Right - Our Vision */}
          <div className="text-left">
            <h3 className="it font-bold text-2xl mb-4">Our Vision</h3>
            <p className="font-light leading-relaxed mb-6">
              We envision more than just teaching finance—we aim to create a
              world where financial literacy is the foundation for security,
              opportunity, and growth. Through expert-driven courses, real-world
              applications, and community support, we are committed to
              transforming financial education.
            </p>
            <ul className="list-disc list-inside font-light space-y-2">
              <li>Equip Learners with Practical Skills</li>
              <li>Promote Financial Independence</li>
              <li>Empower Through Knowledge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}