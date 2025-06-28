"use client";
import React, { useState } from "react";
import Image from "next/image";
import TiltedCards from "@/src/components/ui/TiltedCards";

type CardType = "virtual" | "physical";

interface CardData {
  imageSrc: string;
  backCardSrc: string; // Add back card source
  bulletPoints: string[];
}

const cardData: Record<CardType, CardData> = {
  virtual: {
    imageSrc: "/icons/black-card.svg",
    backCardSrc: "/icons/red-card.svg", // Add back card
    bulletPoints: [
      "Instant activation for online purchases.",
      "No risk of physical loss or theft.",
      "Manage easily through the app.",
      "Eco-friendly and paperless.",
    ],
  },
  physical: {
    imageSrc: "/icons/blue-card.svg",
    backCardSrc: "/icons/purple-card.svg", // Add back card
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
    <section className="py-16 bg-white h-[900px] min-[1200px]:h-[900px]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20  h-full">
        <div className="grid min-[1200px]:grid-cols-2 gap-16 items-center h-full">
          {/* Left side - Tabs and Image */}
          <div className="min-[1200px]:h-full h-[65%] mb-[80px] min-[1200px]:mb-0">
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
                className={`relative z-10 px-5 sm:px-10 py-2 rounded-full text-lg  sm:text-xl font-[400]  transition-colors duration-300 ${
                  activeTab === "virtual" ? "text-white" : "text-gray-800"
                }`}
              >
                Virtual Card
              </button>
              <button
                onClick={() => setActiveTab("physical")}
                className={`relative z-10 px-5 sm:px-10 py-2 rounded-full text-lg  sm:text-xl font-[400]  transition-colors duration-300 ${
                  activeTab === "physical" ? "text-white" : "text-gray-800"
                }`}
              >
                Physical Card
              </button>
            </div>

            {/* Card Image */}
            <div className="flex justify-center  ">
              <div
                key={activeTab}
                className="relative transition-all duration-500 ease-in-out transform animate-slideIn "
              >
                <TiltedCards
                  frontCardSrc={cardData[activeTab].imageSrc}
                  backCardSrc={cardData[activeTab].backCardSrc}
                  frontCardAlt={`${activeTab} card front`}
                  backCardAlt={`${activeTab} card back`}
                />
              </div>
            </div>
          </div>

          {/* Right side - Bullet Points */}
          <div className="flex min-[1200px]:items-center justify-center min-[1200px]:justify-start min-[1200px]:h-full h-[35%]  relative ">
            <ul className="space-y-6 list-disc list-inside">
              {cardData[activeTab].bulletPoints.map((point, index) => (
                <li
                  key={`${activeTab}-${index}`}
                  className="text-xl sm:text-2xl text-primaryText2 font-[500] leading-relaxed opacity-0 animate-fadeIn"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
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
