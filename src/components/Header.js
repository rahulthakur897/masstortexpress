"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { campaigns } from "@/utils/common";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClasses = (href) =>
    `hover:text-[#00296b] ${pathname === href
      ? "text-[#f4f4f4] font-bold underline underline-offset-4"
      : ""
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? "bg-black shadow-md" : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-3 md:py-4">
        <div className="flex gap-4 items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="md:h-[60px] h-[50px] w-[100px]"
            />
          </Link>
          <p className="bg-gradient-to-r from-[#00296b] via-[#f4f4f4] to-green-500 bg-clip-text text-transparent font-bold text-lg sm:text-xl md:text-2xl">
            Mass Tort Express
          </p>
        </div>

        <nav className="hidden md:flex items-center text-[#fff] gap-8 text-sm font-semibold">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="#about" className={linkClasses("#about")}>
            About Us
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className={`${linkClasses("/our-campaigns")} flex items-center gap-1`}
            >
              Our Campaigns <ChevronDown size={16} />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute left-0 mt-1 w-70 bg-white shadow-lg rounded-lg overflow-hidden border z-50">
                {campaigns.map((item, index) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    className="block px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <p className="font-semibold text-[#00296b]">{item.title}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#work" className={linkClasses("#work")}>
            How It Works
          </Link>
          <Link href="#contact" className={linkClasses("#contact")}>
            Contact Us
          </Link>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 shadow-sm animate-slideDown">
          <nav className="flex flex-col p-4 gap-4 text-white font-medium">
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
            <Link href="/about-us" className={linkClasses("/about-us")}>
              About Us
            </Link>
            <Link href="/our-campaigns" className={linkClasses("/our-campaigns")}>
              Our Campaigns
            </Link>
            <Link href="/works" className={linkClasses("/works")}>
              How It Works
            </Link>
            <Link href="/law" className={linkClasses("/law")}>
              For Law Firms
            </Link>
            <Link href="/contact" className={linkClasses("/contact")}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
