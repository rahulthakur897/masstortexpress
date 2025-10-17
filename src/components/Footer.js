import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 items-start text-left">
        <div className="w-full md:w-[40%]">
          <div className="flex items-center gap-4">
            <img
              src="/assets/images/logo.png"
              alt="TortGroup Logo"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <p className="bg-gradient-to-r from-[#00296b] via-[#f4f4f4] to-green-500 bg-clip-text text-transparent font-bold text-xl md:text-[1.5rem]">
              Mass Tort Express
            </p>
          </div>
          <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
            Tort Group is a leading-edge legal marketing company focused on
            high-quality mass tort & institutional abuse lead generation to
            deliver already qualified plaintiffs to law firms.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <h3 className="text-lg md:text-xl font-semibold underline underline-offset-4 decoration-white mb-4">
            Connect
          </h3>
          <div className="flex items-center gap-3 mb-3">
            <Phone className="w-5 h-5 text-[#fff]" />
            <span className="text-sm md:text-base">(888) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <Mail className="w-5 h-5 text-[#fff]" />
            <span className="text-sm md:text-base">info@masstortexpress.com</span>
          </div>
          <button className="bg-[#fff] text-black font-bold px-5 py-2 md:px-6 md:py-2 rounded hover:opacity-90 transition w-full md:w-auto">
            Contact Us
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mt-8 text-base md:text-lg font-medium text-center">
        <Link href="/about-us" className="hover:text-green-400">About Us</Link>
        <Link href="/our-campaigns" className="hover:text-green-400">Our Campaigns</Link>
        <Link href="/works" className="hover:text-green-400">How It Works</Link>
        <Link href="/law" className="hover:text-green-400">For Law Firms</Link>
        <Link href="/contact" className="hover:text-green-400">Contact Us</Link>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-4 md:gap-0 text-center">
        <Link href="/privacy-policy" className="hover:text-[#fff]">
          Privacy Policy
        </Link>
        <p>© 2025 Mass Tort Express. All rights reserved.</p>
      </div>
    </footer>
  );
};
