import FeatureCard from "@/src/components/ui/FeatureCard";

export default function DepositFeatures() {
  const depositFeatures = [
    {
      icon: "/icons/cards.svg", // Update with actual icon
      title: "Flexible Payouts",
      description:
        "Withdraw crypto to any external wallet, or transfer fiat to your bank account, card, or preferred payment method",
    },
    {
      icon: "/icons/wallet-2.svg", // Update with actual icon
      title: "Fast Processing",
      description: "Crypto withdrawals are usually instant; bank transfers typically complete within 1–3 business days",
    },
    {
      icon: "/icons/card-tick.svg", // Update with actual icon
      title: "Transparent Fees",
      description: "See fees and rates upfront before confirming. No hidden charges—just reliable withdrawals",
    }
   
  ];

  return (
    <section className="py-16 bg-white w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {depositFeatures.map((feature, index) => (
            <div className="flex justify-center" key={index}>
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="lg:max-w-full h-[430px] px-[36px] py-[60px] rounded-[12px] bg-white"
                titleClassName="text-4xl leading-[45px] mb-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
