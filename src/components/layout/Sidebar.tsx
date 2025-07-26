"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface MobileSidebarProps {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
  navLinks: Array<{
    name: string;
    href: string;
    hasDropdown?: boolean;
  }>;
  dropdownItems: Array<{
    title: string;
    description: string;
  }>;
}

export default function MobileSidebar({
  showMobileMenu,
  setShowMobileMenu,
  navLinks,
  dropdownItems,
}: MobileSidebarProps) {
  const [showMobileFeatures, setShowMobileFeatures] = useState(false);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileMenu]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300 lg:hidden ${
        showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setShowMobileMenu(false)}
    >
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 flex-shrink-0">
          <Image
            src="/icons/primary-logo.svg"
            alt="Company Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <button
            onClick={() => setShowMobileMenu(false)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <Image
              src="/icons/close.svg"
              alt="Close Menu"
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
          </button>
        </div>

        {/* Sidebar Content - Scrollable */}
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="px-6 space-y-1 text-primaryText2 font-[600]">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  /* Features with dropdown */
                  <div className="border-b-[1px] border-[#0000001A]">
                    <button
                      className="flex items-center justify-between w-full py-4 hover:bg-gray-50"
                      onClick={() => setShowMobileFeatures(!showMobileFeatures)}
                    >
                      {link.name}
                      <Image
                        src={
                          showMobileFeatures
                            ? "/icons/arrow-up.svg"
                            : "/icons/arrow-down.svg"
                        }
                        alt="Toggle"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </button>

                    {/* Features Dropdown Items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        showMobileFeatures
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pb-2">
                        {dropdownItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.title.toLowerCase().replace(/\s+/g, "-")}
                            className="flex flex-col py-3 font-[500] text-sm hover:bg-gray-50 hover:text-blue-600 rounded-md"
                            onClick={() => {
                              setShowMobileMenu(false);
                              setShowMobileFeatures(false);
                            }}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Regular links */
                  <Link
                    href={link.href}
                    className="block py-4 border-b-[1px] border-[#0000001A] hover:bg-gray-50"
                    onClick={() => {
                      setShowMobileMenu(false);
                    }}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Get App Button - Fixed at bottom */}
        <div className="p-6 border-t border-gray-100 flex-shrink-0">
          <Link href="/get-app">
            <button
              className="w-full bg-[#175BE4] flex justify-center items-center text-white px-8 py-[10px] poppins rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-blue-600"
              onClick={() => setShowMobileMenu(false)}
            >
              Get App
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
