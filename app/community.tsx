import Image from "next/image";
export default function CommunitySection() {
  return (
    <>
      <div className="bg-white text-white py-10 px-5 md:px-20 text-center">
        <Image
          src="/ready.png"
          alt="Logo"
          width={250}
          height={50}
          className="mx-auto mb-4"
        />
        <h1 className="text-[#172F73] it font-bold text-4xl">
          Ready to join this Community?
        </h1>
        <p className="text-black it font-thin text-lg mt-4 max-w-2xl mx-auto">
          Join our vibrant Discord community! Connect, share, and grow with
          like-minded enthusiasts. Click to dive in! 🚀
        </p>
        <div className="hidden md:flex mr-10 justify-center mt-6">
            <button className="bg-[#FEE617] font-poppins hover:bg-yellow-300 text-[#132B70] px-6 py-2 rounded-full text-sm font-bold transition-colors">
              Join Now
            </button>
        </div>
      </div>
    </>
  );
}
