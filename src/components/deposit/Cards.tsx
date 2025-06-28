import FeatureCard from "@/src/components/ui/FeatureCard";

export default function DepositFeatures() {
  const depositFeatures = [
    {
      icon: "/icons/cards.svg", // Update with actual icon
      mobileIcon: "/icons/cards-mobile.svg", // Update with actual mobile icon
      title: "Multiple Options",
      description:
        "Deposit through crypto wallets or fiat methods like bank accounts.",
    },
    {
      icon: "/icons/wallet-2.svg", // Update with actual icon
      mobileIcon: "/icons/wallet-mobile.svg", // Update with actual mobile icon
      title: "Unique Address",

      description: "Generate a dedicated address for secure deposits.",
    },
    {
      icon: "/icons/card-tick.svg", // Update with actual icon
      mobileIcon: "/icons/card-tick-mobile.svg",
      title: "Real-Time Updates",
      // Update with actual mobile icon
      description: "See your updated balance within seconds of deposit.",
    },
    {
      icon: "/icons/security-card.svg", // Update with actual icon
      mobileIcon: "/icons/security-card-mobile.svg", // Update with actual mobile icon
      title: "Guaranteed Security",
      description: "Deposits are verified and encrypted for peace of mind.",
    },
  ];

  return (
    <section className="py-16 bg-white w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 ">
          {depositFeatures.map((feature, index) => (
            <div className="flex justify-center" key={index}>
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="lg:w-[303px] w-full max-h-[442px] px-5 sm:px-9 py-[40px] sm:py-[60px] rounded-[12px] bg-white max-w-none"
                titleClassName="sm:text-4xl text-2xl mb-6"
                mobileIcon={feature.mobileIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
