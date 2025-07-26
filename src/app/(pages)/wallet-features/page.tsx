import ThreeColumnCards from "@/src/components/swap/ThreeColumnCards";
import CryptoGatewayBanner from "@/src/components/ui/CryptoGatewayBanner";
import HeroSection from "@/src/components/ui/HeroSection";
import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import PromoBanner from "@/src/components/ui/PromoBanner";
import React from "react";

const walletFeatures = [
  {
    title: "Multi-Currency Wallet",
    description:
      "Hold and manage 100+ cryptocurrencies (Bitcoin, Ethereum, stablecoins, etc.) in one secure place",
    icon: "/icons/three-coins.svg",
  },
  {
    title: "Bank Level Encryption",
    description:
      "Private keys never leave your device; two-factor authentication and encrypted backups keep your funds safe",
    icon: "/icons/key.svg",
    mobileIcon: "/icons/key-mobile.svg"
  },
  {
    title: "Real-Time Monitoring",
    description:
      "View live price updates and get instant alerts so you can monitor your portfolio’s value around the clock",
    icon: "/icons/trend-up.svg",
    mobileIcon: "/icons/trend-up-mobile.svg"

  },
];
export default function WalletFeaturesPage() {
  return (
    <>
      <HeroSection
        title="Your Crypto, Everywhere"
        description="From shopping online to paying in-store, CashPay cards make crypto a part of your everyday life. Spend with confidence, anywhere."
        buttonSize="lg"
        buttonText="Download Now"
        imageSrc="/images/backgrounds/wallet-features-bg.jpg"
        className="object-cover object-center"
        bgDark="medium" // Assuming you want a dark background for this section
      />
      <CryptoGatewayBanner className="py-20">
        <PromoBanner
          title="Your Crypto, Your Rules"
          description="Experience ultimate control over your digital assets. With CashPay, you hold the keys—literally. Security meets simplicity in the palm of your hand."
          isFullWidth={false}
        />
      </CryptoGatewayBanner>
      <HowItWorksSection
        description="Securely store, send, and receive cryptocurrencies with ease, all in one place."
        steps={[
          {
            number: "1.",
            text: "Download the CashPay app and create your account.",
          },
          {
            number: "2.",
            text: "Enable security features like multi-factor authentication.",
          },
          {
            number: "3.",
            text: "View, send, and receive cryptocurrencies effortlessly.",
          },
        ]}
        imageSrc="/icons/iPhones/wallet-iPhone.svg"
        mobileImageSrc="/icons/iPhones/wallet-iPhone-mobile.svg"
        singleColumn={true}
        
      />
      <ThreeColumnCards features={walletFeatures} />
    </>
  );
}
