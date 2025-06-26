import FeatureCard from "@/src/components/ui/FeatureCard";

export default function Cards() {
  const swapFeatures = [
    {
      icon: "/icons/wallet.svg", // Update with actual icon
      title: "Wide Asset Coverage",
      description:
        "Swap between hundreds of cryptocurrencies, from Bitcoin and Ethereum to new altcoins",
    },
    {
      icon: "/icons/coin.svg", // Update with actual icon
      title: "Best Rates",
      description:
        "CashPay automatically finds the best market price across multiple sources, giving you more value for your crypto",
    },
    {
      icon: "/icons/money-change.svg", // Update with actual icon
      title: "One-Click Trades",
      description:
        "Complete your swap with one tap: the trade executes on-chain for full custody of your assets",
    },
  ];

  return (
    <section className="py-16 bg-white w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {swapFeatures.map((feature, index) => (
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="lg:max-w-full w-full h-[312px] lg:h-[442px] bg-orange-200 px-9  lg:py-[60px] rounded-[12px] bg-white max-w-none"
              titleClassName="w-full mb-6"
              iconClassName="w-[35px] h-[35px]"
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
