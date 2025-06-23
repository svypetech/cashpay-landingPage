"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About us", href: "#" },
    { name: "Features", href: "#" },
    { name: "How It Works?", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full px-[60px] fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={
                isScrolled ? "/icons/primary-logo.svg" : "/icons/white-logo.svg"
              }
              alt="Company Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block font-plus-jakarta font-[600]">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm transition-all duration-200 opacity-60 hover:opacity-100 group ${
                    isScrolled
                      ? "text-primaryText hover:text-black"
                      : "text-[#B3B3B3] hover:text-white"
                  }`}
                >
                  {link.name}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                      isScrolled ? "bg-black" : "bg-white"
                    }`}
                  ></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Get App Button */}
          <div className="hidden md:block ">
            <button className="bg-primary text-white px-[30px] py-[10px] rounded-[10px] text-sm font-poppins font-normal transition-colors duration-200 hover:bg-blue-700">
              Get App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white hover:text-gray-300 hover:bg-white/10"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
