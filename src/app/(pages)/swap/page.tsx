import CoinsSection from "@/src/components/swap/CoinsSection";
import SwapFeatures from "@/src/components/swap/ThreeColumnCards";
import HeroSection from "@/src/components/ui/HeroSection";
import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import PromoBanner from "@/src/components/ui/PromoBanner";

const steps = [
  {
    number: "1.",
    text: "Select the cryptocurrencies you want to swap.",
  },
  {
    number: "2.",
    text: "Enter the amount and review real-time exchange rates.",
  },
  {
    number: "3.",
    text: "Confirm the transaction and receive your new asset.",
  },
];

const swapFeatures = [
  {
    icon: "/icons/wallet.svg",
    mobileIcon: "/icons/wallet-mobile.svg", // Update with actual mobile icon
    // Update with actual icon
    title: "Wide Asset Coverage",
    description:
      "Swap between hundreds of cryptocurrencies, from Bitcoin and Ethereum to new altcoins",
  },
  {
    icon: "/icons/coin.svg", // Update with actual icon
    mobileIcon: "/icons/coin-mobile.svg", // Update with actual mobile icon
    title: "Best Rates",
    description:
      "CashPay automatically finds the best market price across multiple sources, giving you more value for your crypto",
  },
  {
    icon: "/icons/money-change.svg", // Update with actual icon
    mobileIcon: "/icons/money-change-mobile.svg", // Update with actual mobile icon
    title: "One-Click Trades",
    description:
      "Complete your swap with one tap: the trade executes on-chain for full custody of your assets",
  },
];
export default function SwapPage() {
  return (
    <>
      <HeroSection
        title="Instant Crypto Conversions"
        description="Convert coins and tokens in seconds. CashPay’s built-in swap feature offers live exchange rates and minimal fees—execute trades seamlessly with a single tap, no separate accounts needed"
        imageSrc="/images/backgrounds/swap-bg.jpg"
        imageAlt="Crypto Swap Hero"
        buttonText="Download now"
        buttonSize="lg"
        className="object-contain"
      />
      <CoinsSection />
      <PromoBanner
        title="Trade Without Limits"
        description="Skip the complexities of traditional exchanges."
        isFullWidth={true}
        showNoiseEffect={false}
        className="lg:h-[500px]"
      />
      <HowItWorksSection
        title="How It Works"
        description="Exchange cryptocurrencies instantly and at the best market rates. Let’s show you how it’s done"
        steps={steps}
        imagePosition="left"
        imageSrc="/icons/swap-iphone.svg"
        imageAlt="CashPay Swap Feature"
        imageClasses="w-full h-full"
      />
      <SwapFeatures features={swapFeatures} />
    </>
  );
}
