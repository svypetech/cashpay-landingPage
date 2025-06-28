import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import PromoBanner from "@/src/components/ui/PromoBanner";
import Cards from "@/src/components/deposit/FourColumnCards";
import HeroSection from "@/src/components/ui/HeroSection";
const steps = [
  {
    number: "1.",
    text: "Choose crypto or fiat as your deposit method.",
  },
  {
    number: "2.",
    text: "Generate your unique wallet address for crypto deposits.",
  },
  {
    number: "3.",
    text: "Transfer funds securely from your account or other wallets.",
  },
  {
    number: "4.",
    text: "Receive a confirmation and see your updated wallet balance.",
  },
];
const features =  [
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

export default function DepositPage() {
  return (
    <div className="">
      <HeroSection
        title="Quick, Secure Funding"
        description="Fund your CashPay wallet effortlessly. Send crypto from any external address or use our fiat on-ramp to buy crypto via bank transfer or card—available 24/7"
        imageSrc="/images/backgrounds/deposit-bg.jpg"
        imageAlt="Deposit Background"
        buttonText="Download now"
        buttonSize="lg"
      />
      <PromoBanner
        title="Fuel Your Wallet in Seconds"
        description="Whether you're transferring crypto or buying with fiat, CashPay makes deposits quick, easy, and completely hassle-free."
      />
      <HowItWorksSection
        description="Adding funds to your account is quick and secure. Here's how you can deposit your crypto or fiat"
        steps={steps}
        imageSrc="/icons/double-iphone-vertical.svg"
        imageAlt="CashPay Mobile App"
        imagePosition="left"
        imageClasses="h-full w-full"
        
      />
      <Cards features={features} />
    </div>
  );
}
