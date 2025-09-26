"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileSidebar from "./Sidebar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about-us" },
    { name: "Features", href: "", hasDropdown: true },
    { name: "How It works?", href: "/how-it-works" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Privacy Policy", href: "/privacyPolicy" },
  ];

  const dropdownItems = [
    {
      title: "Deposit",
      description: "Easily add funds to your wallet from any source.",
    },
    {
      title: "Withdraw",
      description:
        "Transfer your crypto to external wallets or convert to fiat.",
    },
    {
      title: "Swap",
      description: "Exchange one cryptocurrency for another instantly.",
    },
    {
      title: "Send Gift",
      description: "Share crypto with friends and family as a thoughtful gift.",
    },
    {
      title: "Cards",
      description: "Spend your crypto with physical and virtual cards.",
    },
    {
      title: "Wallet Features",
      description: "Securely store your crypto in hot wallets for easy access.",
    },
    {
      title: "Portfolio Management",
      description: "Monitor your holdings and track performance effortlessly.",
    },
    {
      title: "P2P Trading",
      description: "Trade directly with others through our secure platform.",
    },
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
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled || showDropdown ? "bg-white shadow-md" : "bg-transparent"
        }`}
        style={{
          height: showDropdown ? "320px" : "64px",
        }}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <div className="px-[60px] max-md:px-6 h-full">
          {/* Main Navbar Content */}
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={
                  isScrolled || showDropdown
                    ? "/icons/primary-logo.svg"
                    : "/icons/white-logo.svg"
                }
                alt="Company Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden xl:block font-plus-jakarta font-[600]">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative">
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 text-sm transition-all duration-200 opacity-60 hover:opacity-100 group text-[#FFFFFF] ${
                        showDropdown && link.name === "Features"
                          ? "hover:bg-[#27AAE11A] rounded-lg text-primaryText2"
                          : showDropdown
                          ? "text-primaryText2"
                          : isScrolled
                          ? "text-primaryText hover:text-black"
                          : ""
                      }`}
                      onMouseEnter={() => {
                        if (link.hasDropdown) {
                          setShowDropdown(true);
                        } else {
                          setShowDropdown(false);
                        }
                      }}
                    >
                      {link.name}
                      {link.name !== "Features" && (
                        <div
                          className={`absolute bottom-0 left-0 w-full h-[2.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200  ${
                            isScrolled && !showDropdown
                              ? "bg-black"
                              : "bg-white"
                          }`}
                        ></div>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Get App Button */}
            <div className="hidden xl:block">
              <Link href="/get-app">
                <button className="bg-[#175BE4] flex justify-center items-center text-white px-8 py-[10px] poppins rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-blue-600">
                  Get App
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                type="button"
                onClick={() => setShowMobileMenu(true)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                  isScrolled || showDropdown
                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white hover:text-gray-300 hover:bg-white/10"
                }`}
              >
                <span className="sr-only">Open main menu</span>
                <Image
                  src={
                    isScrolled
                      ? "/icons/hamburger-black.svg"
                      : "/icons/hamburger.svg"
                  }
                  alt="Menu"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* Desktop Dropdown Content - Inside Navbar */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showDropdown ? "opacity-100 " : "opacity-0 max-h-0"
            }`}
          >
            <div className="py-4 px-8">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Left side - Large icon */}
                <div className="flex-shrink-0 w-48 flex items-center justify-start relative left-[-50px]">
                  <Image
                    src="/icons/dropdown-icons.svg"
                    alt="Features Icon"
                    width={140}
                    height={100}
                    className="w-auto h-auto"
                  />
                </div>

                {/* Right side - Feature grid */}
                <div className="flex-1 pl-8">
                  <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                    {dropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={`/${item.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={() => setShowDropdown(false)}
                        className="block group plus-jakarta-sans"
                      >
                        <div className="text-left">
                          <h4 className="font-[700] text-[18px] mb-1 group-hover:text-[#175BE4]">
                            {item.title}
                          </h4>
                          <p className="text-xs font-[400] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Component */}
      <MobileSidebar
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        navLinks={navLinks}
        dropdownItems={dropdownItems}
      />
    </>
  );
}
