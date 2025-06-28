import FeatureCard from "@/src/components/ui/FeatureCard";

export default function Cards() {
  const withdrawFeatures = [
    {
      icon: "/icons/wallet-check.svg", // Update with actual icon
      mobileIcon: "/icons/wallet-check-mobile.svg", // Update with actual mobile icon
      title: "Flexible Payouts",
      description:
        "Withdraw crypto to any external wallet, or transfer fiat to your bank account, card, or preferred payment method",
    },
    {
      icon: "/icons/money-time.svg", // Update with actual icon
      mobileIcon: "/icons/money-time-mobile.svg", // Update with actual mobile icon
      title: "Fast Processing",
      description:
        "Crypto withdrawals are usually instant; bank transfers typically complete within 1–3 business days",
    },
    {
      icon: "/icons/discount-circle.svg", // Update with actual icon
      mobileIcon: "/icons/discount-circle-mobile.svg", // Update with actual mobile icon
      title: "Transparent Fees",
      description:
        "See fees and rates upfront before confirming. No hidden charges—just reliable withdrawals",
    },
  ];

  return (
    <section className="py-16 bg-white w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {withdrawFeatures.map((feature, index) => (
            <div className="flex justify-center" key={index}>
              <FeatureCard
                key={index}
                icon={feature.icon}
                mobileIcon={feature.mobileIcon}
                title={feature.title}
                description={feature.description}
                className="lg:max-w-full max-h-[430px] px-5 py-[40px] sm:px-[36px] sm:py-[60px] rounded-[12px] bg-white"
                titleClassName="sm:text-4xl leading-[45px] mb-6 text-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
