import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-white py-10 px-6 md:px-20 it">
      <div className="max-w-7xl mx-auto border border-[#D9D9D9] rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Logo + Tagline */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png" // replace with your actual logo path
                alt="PocketEd Logo"
                width={50}
                height={50}
              />
              <h1 className="text-2xl font-bold text-[#172F73] it">
                Pocket<span className="text-[#FEE617]">Ed</span>
              </h1>
            </div>
            <p className="mt-2 text-xs text-gray-600 max-w-[200px]">
              Empowering Financial Education for Students
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-black mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Home</li>
              <li>Mission</li>
              <li>Courses</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="font-semibold text-black mb-3">Legal</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Privacy</li>
              <li>Term & Condition</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-black mb-3">Contact Us</h2>
            <p className="text-sm text-gray-600">+91 9876543210</p>
            <p className="text-sm text-gray-600">info@pocketed.in</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3 text-gray-600">
              <FaFacebookF className="cursor-pointer hover:text-[#172F73]" />
              <FaInstagram className="cursor-pointer hover:text-[#172F73]" />
              <FaYoutube className="cursor-pointer hover:text-[#172F73]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
