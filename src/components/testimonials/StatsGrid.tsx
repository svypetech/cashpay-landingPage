import React from "react";

interface StatItem {
  icon: string;
  title: string;
  description: string;
  mobileIcon?: string;
}

export default function StatsGrid() {
  const stats: StatItem[] = [
    {
      icon: "/icons/people.svg",
      mobileIcon: "/icons/people-mobile.svg",
      title: "10+ Million Active Users",
      description:
        "Join a global community of crypto enthusiasts who trust CashPay for their financial needs",
    },
    {
      icon: "/icons/map.svg",
      title: "75+ Countries Served",
      description:
        "From small towns to global hubs, our reach extends to every corner of the world",
    },
    {
      icon: "/icons/currency.svg",
      title: "$1 Billion+ Transactions",
      description:
        "Experience seamless transactions with unparalleled security and transparency",
    },
    {
      icon: "/icons/moneys.svg",
      mobileIcon: "/icons/moneys-mobile.svg",
      title: "99.9% Platform Uptime",
      description:
        "Reliable and uninterrupted services to keep your assets moving at all times",
    },
    {
      icon: "/icons/merchant.svg",
      title: "20,000+ Merchants",
      description:
        "Empowering businesses worldwide to accept and manage crypto effortlessly",
    },
  ];

  return (
    <section className="py-23 bg-dark-mode-bg">
      <header className="space-y-4 sm:text-center mb-16 px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h1 className="text-4xl sm:text-5xl text-dark-mode-secondary font-[700]">
          Built on Trust, Backed by Numbers
        </h1>
        <p className="text-base sm:text-lg font-[600] text-white">
          Our journey is defined by the success stories of millions of users
          worldwide
        </p>
      </header>

      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout - single column */}
          <div className="lg:hidden space-y-4">
            {/* 1. People - Taller */}
            <div className="bg-[#1E1E1E] rounded-[12px] px-8 py-12 h-[380px]">
              <div className="w-15 h-15 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary mb-3 ">
                <img
                  src={stats[0].mobileIcon}
                  alt={stats[0].title}
                  className="w-[50%] h-[50%]"
                />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 max-w-[250px]">
                {stats[0].title}
              </h3>
              <p className="text-dark-mode-secondaryText font-[300] text-sm">
                {stats[0].description}
              </p>
            </div>

            {/* 2. Countries */}
            <div className="bg-[#1E1E1E] rounded-[12px] px-8 py-8 h-auto">
              <div className="w-15 h-15 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary mb-3">
                <img
                  src={stats[1].icon}
                  alt={stats[1].title}
                  className="w-[50%] h-[50%]"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {stats[1].title}
              </h3>
              <p className="text-dark-mode-secondaryText font-[300] text-sm">
                {stats[1].description}
              </p>
            </div>

            {/* 3. Transactions - Taller */}
            <div className="bg-[#1E1E1E] rounded-[12px] px-8 py-12 h-[380px]">
              <div className="w-15 h-15 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary mb-3">
                <img
                  src={stats[2].icon}
                  alt={stats[2].title}
                  className="w-[50%] h-[50%]"
                />
              </div>
              <h3 className="text-4xl font-bold text-white mb-10">
                {stats[2].title}
              </h3>
              <p className="text-dark-mode-secondaryText font-[300] text-sm">
                {stats[2].description}
              </p>
            </div>

            {/* 4. Uptime */}
            <div className="bg-[#1E1E1E] rounded-[12px] px-8 py-12 h-auto">
              <div className="w-15 h-15 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary mb-3">
                <img
                  src={stats[3].mobileIcon}
                  alt={stats[3].title}
                  className="w-[50%] h-[50%]"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {stats[3].title}
              </h3>
              <p className="text-dark-mode-secondaryText font-[300] text-sm">
                {stats[3].description}
              </p>
            </div>

            {/* 5. Merchants */}
            <div className="bg-[#1E1E1E] rounded-[12px] px-8 py-12 h-auto">
              <div className="w-15 h-15 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary mb-3">
                <img
                  src={stats[4].icon}
                  alt={stats[4].title}
                  className="w-[50%] h-[50%]"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {stats[4].title}
              </h3>
              <p className="text-dark-mode-secondaryText font-[300] text-sm">
                {stats[4].description}
              </p>
            </div>
          </div>

          {/* Desktop Layout - grid */}
          <div className="hidden lg:grid grid-cols-[68%_32%] gap-4 min-h-[900px]">
            {/* Left column - 68% width */}
            <div className="">
              {/* Top card - 10+ Million */}
              <div className="bg-[#1E1E1E] rounded-[12px] px-8 py-12 mb-4 w-full h-[52%]">
                <div className="w-15 h-15 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary mb-10">
                  <img
                    src={stats[0].icon}
                    alt={stats[0].title}
                    className="w-[50%] h-[50%]"
                  />
                </div>
                <h3 className="text-3xl lg:text-6xl font-bold text-white mb-4">
                  {stats[0].title}
                </h3>
                <p className="text-dark-mode-secondaryText font-[300] text-sm">
                  {stats[0].description}
                </p>
              </div>

              {/* Bottom row - Two cards side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[48%]">
                {/* Platform Uptime */}
                <div className="bg-[#1E1E1E] rounded-[12px] px-8 py-12">
                  <div className="w-20 h-20 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary mb-10">
                    <img
                      src={stats[3].icon}
                      alt={stats[3].title}
                      className="w-[50%] h-[50%]"
                    />
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                    {stats[3].title}
                  </h3>
                  <p className="text-dark-mode-secondaryText font-[300] text-sm">
                    {stats[3].description}
                  </p>
                </div>

                {/* Merchants */}
                <div className="bg-[#1E1E1E] rounded-[12px] px-8 py-12">
                  <div className="w-20 h-20 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary mb-10">
                    <img
                      src={stats[4].icon}
                      alt={stats[4].title}
                      className="w-[50%] h-[50%]"
                    />
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4 max-w-[150px]">
                    {stats[4].title}
                  </h3>
                  <p className="text-dark-mode-secondaryText font-[300] text-sm max-w-[300px]">
                    {stats[4].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - 32% width */}
            <div className="">
              {/* Top card - 75+ Countries */}
              <div className="bg-[#1E1E1E] rounded-[12px] px-8 py-12 mb-4 h-[38%]">
                <div className="w-20 h-20 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary mb-10">
                  <img
                    src={stats[1].icon}
                    alt={stats[1].title}
                    className="w-[50%] h-[50%]"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {stats[1].title}
                </h3>
                <p className="text-dark-mode-secondaryText font-[300] text-sm max-w-[300px]">
                  {stats[1].description}
                </p>
              </div>

              {/* Bottom card - $1 Billion Transactions */}
              <div className="bg-[#1E1E1E] rounded-[12px] px-8 py-12 h-[62%]">
                <div className="w-20 h-20 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary mb-10">
                  <img
                    src={stats[2].icon}
                    alt={stats[2].title}
                    className="w-[50%] h-[50%]"
                  />
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4 max-w-[300px]">
                  {stats[2].title}
                </h3>
                <p className="text-dark-mode-secondaryText font-[300] text-sm max-w-[300px]">
                  {stats[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
