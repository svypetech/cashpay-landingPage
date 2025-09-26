"use client";
import React, { useState } from "react";
import Image from "next/image";

type CardType = "virtual" | "physical";

interface CardData {
  desktopImageSrc: string;
  mobileImageSrc: string;
  bulletPoints: string[];
}

const cardData: Record<CardType, CardData> = {
  virtual: {
    desktopImageSrc: "/icons/cards/virtual-cards.svg",
    mobileImageSrc: "/icons/cards/virtual-cards-mobile.svg",
    bulletPoints: [
      "Instant activation for online purchases.",
      "No risk of physical loss or theft.",
      "Manage easily through the app.",
      "Eco-friendly and paperless.",
    ],
  },
  physical: {
    desktopImageSrc: "/icons/cards/physical-cards.svg",
    mobileImageSrc: "/icons/cards/physical-cards-mobile.svg",
    bulletPoints: [
      "Perfect for in-store purchases.",
      "Worldwide acceptance at ATMs.",
      "Premium card materials and design.",
      "Backup option for digital wallets.",
    ],
  },
};

export default function CardTypesSection() {
  const [activeTab, setActiveTab] = useState<CardType>("virtual");

  return (
    <section className="py-16  bg-white h-[1000px] min-[1024px]:h-[900px]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 h-full">
        <div className="grid min-[1024px]:grid-cols-2 min-[1024px]:gap-16 min-[1024px]:items-center h-full">
          {/* Left side - Tabs and Image */}
          <div className="min-[1024px]:h-full min-[1024px]:mb-[80px] min-[1024px]:mb-0 ">
            {/* Tab Buttons Container */}
            <div className="relative bg-gray-100 rounded-full p-1 inline-flex mb-12">
              {/* Sliding Background */}
              <div
                className={`absolute top-1 left-1 bg-gradient-to-r from-[#27AAE1] to-[#126689] rounded-full shadow-lg transition-transform duration-300 ease-in-out ${
                  activeTab === "virtual" ? "translate-x-0" : "translate-x-full"
                }`}
                style={{
                  width: "calc(50% - 4px)",
                  height: "calc(100% - 8px)",
                }}
              />

              {/* Tab Buttons */}
              <button
                onClick={() => setActiveTab("virtual")}
                className={`relative z-10 px-5 sm:px-10 py-2 rounded-full text-lg sm:text-xl font-[400] transition-colors duration-300 ${
                  activeTab === "virtual" ? "text-white" : "text-gray-800"
                }`}
              >
                Virtual Card
              </button>
              <button
                onClick={() => setActiveTab("physical")}
                className={`relative z-10 px-5 sm:px-10 py-2 rounded-full text-lg sm:text-xl font-[400] transition-colors duration-300 ${
                  activeTab === "physical" ? "text-white" : "text-gray-800"
                }`}
              >
                Physical Card
              </button>
            </div>

            {/* Card Image */}
            <div className="flex justify-center">
              <div
                key={activeTab}
                className="relative transition-all duration-500 ease-in-out transform animate-slideIn"
              >
                {/* Desktop Image */}
                <img
                  src={cardData[activeTab].desktopImageSrc}
                  alt={`${activeTab} cards desktop`}
                  className="hidden lg:block w-full h-full  scale-110"
                  
                />

                {/* Mobile Image */}
                <img
                  src={cardData[activeTab].mobileImageSrc}
                  alt={`${activeTab} cards mobile`}
                  className="block lg:hidden w-full h-full scale-110"
                />
              </div>
            </div>
          </div>

          {/* Right side - Bullet Points */}
          <div className="flex min-[1024px]:items-center justify-center min-[1024px]:justify-start min-[1024px]:h-full h-[70%] relative">
            <div className="space-y-6">
              {cardData[activeTab].bulletPoints.map((point, index) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="flex items-start space-x-3 opacity-0 animate-fadeIn"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Custom small bullet */}
                  <div className="flex items-center gap-4">

                  <div className="w-2 h-2 bg-primaryText2 rounded-full mt-2.5 flex-shrink-0 relative top-[-3px]"></div>
                  <p className="text-xl sm:text-2xl text-primaryText2 font-[500] leading-relaxed">
                    {point}
                  </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
