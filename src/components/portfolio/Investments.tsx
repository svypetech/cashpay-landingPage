import React from "react";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="py-35 bg-dark-mode-bg">
      <div className="px-6 md:px-8 lg:px-12 xl:px-16 3xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[50%_50%] gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-5xl lg:text-6xl max-w-lg  font-[800] text-dark-mode-secondary mb-6 leading-tight">
                Master Your Investments
              </h2>
              <p className="text-xl text-white font-[700] leading-relaxed max-w-[600px]">
                Stay ahead of the market with deep insights into your portfolio.
                From real-time updates to advanced analytics, CashPay empowers
                every decision you make.
              </p>
            </div>

            {/* Right side - Portfolio Card */}
            <div className="flex ">
              <div className="bg-[#1E1E1E] rounded-[20px] py-8 px-8 w-[100%] md:w-[67%] h-[272px]">
                {/* Header */}
                <div className="mb-6">
                  <p className="text-dark-mode-secondaryText text-2xl font-[700] mb-5">
                    Current Balance
                  </p>
                  <div className="flex items-center  gap-3">
                    <Image
                      src="/icons/bitcoin2.svg"
                      alt="Bitcoin"
                      width={100}
                      height={100}
                      className="w-[80px] h-[80px]"
                    />
                    <p className="text-white text-4xl md:text-5xl font-[500] w-full">
                      024.23 BTC
                    </p>
                  </div>
                </div>

                {/* Balance Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-dark-mode-secondaryText text-3xl md:text-4xl font-[600]">
                      ≈$234.53
                    </span>
                    <div className="flex items-center relative top-[-6px] left-[-2px]">
                      <Image
                        src="/icons/arrow-up-2.svg"
                        width={12}
                        height={12}
                        alt="arrow-up"
                      />

                      <span className="text-[#08C401] font-[600]  px-2 py-1 text-2xl relative left-[-7px]">
                        2.45%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
