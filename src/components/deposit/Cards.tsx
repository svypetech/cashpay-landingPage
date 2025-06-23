import FeatureCard from "@/src/components/ui/FeatureCard";

export default function DepositFeatures() {
  const depositFeatures = [
    {
      icon: "/icons/cards.svg", // Update with actual icon
      title: "Multiple Options",
      description:
        "Deposit through crypto wallets or fiat methods like bank accounts.",
    },
    {
      icon: "/icons/wallet-2.svg", // Update with actual icon
      title: "Unique Address",
      description: "Generate a dedicated address for secure deposits.",
    },
    {
      icon: "/icons/card-tick.svg", // Update with actual icon
      title: "Real-Time Updates",
      description: "See your updated balance within seconds of deposit.",
    },
    {
      icon: "/icons/security-card.svg", // Update with actual icon
      title: "Guaranteed Security",
      description: "Deposits are verified and encrypted for peace of mind.",
    },
  ];

  return (
    <section className="py-16 bg-white w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 ">
          {depositFeatures.map((feature, index) => (
            <div className="flex justify-center" key={index}>

            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="lg:w-[303px] w-full h-[442px] px-9 py-[60px] rounded-[12px] bg-white max-w-none"
              titleClassName="text-4xl leading-[45px] mb-6"
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
