import Image from "next/image";
import FeatureCard from "@/src/components/ui/FeatureCard";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: "/icons/wallet.svg", // Update with actual icon name from your icons folder
      title: "Multi-Currency Wallet",
      description: "Support for Bitcoin, Ethereum, and more",
    },
    {
      icon: "/icons/shield-tick.svg", // Update with actual icon name
      title: "Secure Transactions",
      description:
        "Hot wallet infrastructure ensuring fast and safe operations",
    },
    {
      icon: "/icons/status-up-mobile.svg", // Update with actual icon name
      title: "Real-Time Insights",
      description: "Live price alerts and portfolio performance tracking",
    },
    {
      icon: "/icons/account.svg", // Update with actual icon name
      title: "P2P Trading",
      description: "Buy and sell crypto directly with other users",
    },
    {
      icon: "/icons/card-coin.svg", // Update with actual icon name
      title: "Fiat Conversion",
      description: "Seamless crypto-to-fiat transactions",
    },
    {
      icon: "/icons/mobile.svg", // Update with actual icon name
      title: "User-Friendly Interface",
      description: "Intuitive design for both beginners and seasoned traders",
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Responsive Container with Equal Padding */}
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-plus-jakarta">
              What Sets Us Apart?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-plus-jakarta">
              Your all-in-one crypto solution—secure, intuitive, and built for
              everyone.
            </p>
          </div>

          {/* Main Content */}
          <div className="relative w-full">
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center w-full">
              {/* Left Column - Features 1-3 */}
              <div className="space-y-8 w-full">
                {features.slice(0, 3).map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>

              {/* Center Column - iPhone Mockup */}
              <div className="flex justify-center w-full">
                <div className="relative">
                  <img
                    src="/icons/iPhones/what-sets-us-iPhone.svg"
                    alt="iPhone Mockup"
                    className="xl:max-w-[1103px] xl:max-h-[827px] max-w-[1000px] max-h-[650px]"
                  />
                </div>
              </div>

              {/* Right Column - Features 4-6 */}
              <div className="space-y-8 w-full ml-5">
                {features.slice(3, 6).map((feature, index) => (
                  <FeatureCard
                    key={index + 3}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden w-full">
              {/* First 3 Features */}
              <div className="grid grid-cols-1  gap-y-10 gap-x-6 mb-12">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="max-w-[100%]">
                    <FeatureCard
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  </div>
                ))}
              </div>

              {/* iPhone Mockup */}
              <div className="flex justify-center mb-12">
                
                  <img
                    src="/icons/iPhones/what-sets-us-iPhone-mobile.svg"
                    alt="iPhone Mockup"
                    className="w-full h-full"
                  />
                
              </div>

              {/* Last 3 Features */}
              <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                {features.slice(3, 6).map((feature, index) => (
                  <div key={index + 3} className="max-w-[100%]">
                    <FeatureCard
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
