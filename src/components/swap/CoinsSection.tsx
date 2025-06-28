import React from "react";
import Image from "next/image";

interface CoinData {
  id: string;
  name: string;
  price: string;
  previousPrice: string;
  changePercent: string;
  iconPath: string;
}

const coinsData: CoinData[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    price: "36,272.28",
    previousPrice: "31,211.02",
    changePercent: "2.3%",
    iconPath: "/icons/bitcoin.svg",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    price: "36,272.28",
    previousPrice: "31,211.02",
    changePercent: "2.3%",
    iconPath: "/icons/ethereum.svg",
  },
  {
    id: "tether",
    name: "Tether",
    price: "36,272.28",
    previousPrice: "31,211.02",
    changePercent: "2.3%",
    iconPath: "/icons/tether.svg",
  },
];

export default function CoinsSection() {
  return (
    <section className="lg:py-30 py-20 bg-white">
      <div className="px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-[40px] font-bold text-black mb-6 font-plus-jakarta leading-tight">
              CashPay's seamless swap feature lets you trade instantly with
              total{" "}
              <span className="text-dark-mode-secondary">transparency</span>.
            </h2>
          </div>

          {/* Trading Cards */}
          <div className="flex flex-col gap-5 max-w-7xl mx-auto md:flex-row">
            {coinsData.map((coin) => (
              <div
                key={coin.id}
                className="bg-white border-[1px] border-primary/50 rounded-[10px] py-6 px-5 w-full h-[230px] flex flex-col w-[410.67px]"
              >
                <div className="flex flex-col  gap-3 ">
                  <div className="flex items-center">
                    <Image
                      src={coin.iconPath}
                      alt={`${coin.name} icon`}
                      width={60}
                      height={60}
                      className="h-[60px] w-[60px]"
                    />
                  </div>
                  <span className="font-[500]">BTC/UTC</span>
                </div>

                <div className="">
                  <div className="flex items-center justify-between">
                    <span className="text-[28px] font-bold text-[#143881] font-plus-jakarta leading-relaxed">
                      {coin.price}
                    </span>
                    <div className="bg-yellow-400 text-black px-4 pb-[3px] rounded-full text-[14px] font-[700] flex flex-col justify-center items-center ">
                      {coin.changePercent}
                    </div>
                  </div>
                </div>

                <div className="text-[#143881] font-[600] text-lg plus-jakarta-sans">
                  {coin.previousPrice}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
