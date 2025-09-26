import React from "react";
import Image from "next/image";
import FeatureCard from "@/src/components/ui/FeatureCard";
import FourColumnCards from "../deposit/FourColumnCards";

const lifestyleFeatures = [
  {
    icon: "/icons/cards.svg",
    title: "Multiple Cards",
    description:
      "You can manage multiple cards simultaneously for different needs—whether for personal use, business, or gifting.",
  },
  {
    icon: "/icons/brush.svg",
    mobileIcon: "/icons/brush-mobile.svg",
    title: "Customizable Design",
    description:
      "Customize your card to reflect your personality and preferences.",
  },
  {
    icon: "/icons/diamond.svg",
    title: "Personalized Names",
    description:
      "Assign unique names to each card for easy organization and a personal touch.",
  },
];

const additionalFeatures = [
  {
    icon: "/icons/world.svg",
    title: "Global Access",
    description: "Use cards for online/offline payments worldwide.",
  },
  {
    icon: "/icons/cloud-card.svg",
    title: "Virtual Cards",
    description:
      "Instant issuance for immediate transactions. Compatible with Apple Pay and Google Pay.",
  },
  {
    icon: "/icons/card-pos.svg",
    mobileIcon: "/icons/card-pos-mobile.svg",
    title: "Physical Cards",
    description: "Durable and stylish cards delivered to your doorstep.",
  },
  {
    icon: "/icons/empty-wallet-change.svg",
    mobileIcon: "/icons/empty-wallet-change-mobile.svg",
    title: "Real-Time Sync",
    description: "Automatically link your wallet with the card.",
  },
];

// Combined features for mobile layout
const allFeatures = [...lifestyleFeatures, ...additionalFeatures];

export default function CardsLifestyleSection() {
  return (
    <section className="py-16 lg:py-24 ">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Cards That Fit Your Lifestyle
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Manage, customize, and personalize your cards to match your needs,
            your style, and your life.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left side - Lifestyle Feature Cards */}
            <div className="space-y-8">
              {lifestyleFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="bg-white w-full lg:h-[322px] px-9 lg:py-[40px]"
                />
              ))}
            </div>

            {/* Right side - Cards Collection Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/icons/cards-collection.svg"
                  alt="CashPay Cards Collection"
                  width={600}
                  height={700}
                  className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Additional Features Grid - Desktop */}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Single Column Layout */}
          <div className="space-y-6">
            {/* First 3 cards */}
            {allFeatures.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                mobileIcon={feature.mobileIcon}
                titleClassName="mb-5"
                
              />
            ))}

            {/* Cards Collection Image */}
            <div className="flex justify-center py-8">
              <div className="relative">
                <Image
                  src="/icons/cards-collection.svg"
                  alt="CashPay Cards Collection"
                  width={400}
                  height={500}
                  className="w-full max-w-[350px] h-auto object-contain"
                />
              </div>
            </div>

            {/* Remaining 4 cards */}
            {allFeatures.slice(3).map((feature, index) => (
              <FeatureCard
                key={index + 3}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                mobileIcon={feature.mobileIcon}
                titleClassName="mb-5"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block mt-[200px]">
        <FourColumnCards features={additionalFeatures} />
      </div>
    </section>
  );
}
