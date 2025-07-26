import HeroSection from "@/src/components/ui/HeroSection";
import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import PromoBanner from "@/src/components/ui/PromoBanner";
import CryptoGatewayBanner from "@/src/components/ui/CryptoGatewayBanner";
import ThreeColumnCards from "@/src/components/swap/ThreeColumnCards"
export default function WithdrawPage() {
  const withdrawSteps = [
    {
      number: "1.",
      text: "Select crypto or fiat for your withdrawal method.",
    },
    {
      number: "2.",
      text: "Enter the amount and provide the destination wallet or bank account.",
    },
    {
      number: "3.",
      text: "Confirm the withdrawal, and track its status until completed.",
    },
  ];
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
    <>
      <HeroSection
        title="Withdraw Anytime, Anywhere"
        description="Cash out your assets in seconds or days—whatever suits you. Send crypto to any wallet address or convert to fiat and withdraw to your bank, all with clear rates and secure processing"
        imageSrc="/images/backgrounds/withdraw-bg.jpg"
        imageAlt="Withdraw Background"
        buttonText="Download now"
        buttonSize="lg"
        
      />
      <ThreeColumnCards features={withdrawFeatures} />
      <HowItWorksSection
        title="How It Works"
        description="Withdrawing your funds is simple and secure. Choose your preferred method and get your money where you need it."
        steps={withdrawSteps}
        imageSrc="/icons/withdraw-phones.svg"
        imageAlt="Withdraw Process Mobile App"
        imagePosition="right"
        imageClasses="w-full h-full"
      />
      <CryptoGatewayBanner className="py-25">
        <PromoBanner
          isFullWidth={false}
          title="Cash out your crypto effortlessly with fast and secure withdrawal options for all users."
          showNoiseEffect={false}
        />
      </CryptoGatewayBanner>
    </>
  );
}
