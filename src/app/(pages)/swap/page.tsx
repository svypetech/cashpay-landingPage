import CoinsSection from "@/src/components/swap/CoinsSection";
import SwapFeatures from "@/src/components/swap/Cards";
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
        text="Trade Without Limits"
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
      />
      <SwapFeatures />
    </>
  );
}
