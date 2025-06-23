import FeatureCard from "@/src/components/ui/FeatureCard";

export default function DepositFeatures() {
  const depositFeatures = [
    {
      icon: "/icons/wallet.svg", // Update with actual icon
      title: "Multiple Options",
      description:
        "Deposit through crypto wallets or fiat methods like bank accounts.",
    },
    {
      icon: "/icons/account.svg", // Update with actual icon
      title: "Unique Address",
      description: "Generate a dedicated address for secure deposits.",
    },
    {
      icon: "/icons/status-up.svg", // Update with actual icon
      title: "Real-Time Updates",
      description: "See your updated balance within seconds of deposit.",
    },
    {
      icon: "/icons/shield-tick.svg", // Update with actual icon
      title: "Guaranteed Security",
      description: "Deposits are verified and encrypted for peace of mind.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-center items-center">
          {depositFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="w-[303px] h-[442px] px-9 py-[60px] rounded-[12px] bg-white max-w-none"
              titleClassName="text-4xl leading-[45px] mb-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
