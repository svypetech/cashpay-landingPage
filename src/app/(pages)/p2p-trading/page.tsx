import ThreeColumnCards from "@/src/components/swap/ThreeColumnCards";
import CryptoGatewayBanner from "@/src/components/ui/CryptoGatewayBanner";
import HeroSection from "@/src/components/ui/HeroSection";
import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import PromoBanner from "@/src/components/ui/PromoBanner";


const steps = [
  // add number and text to each step
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

  // add the above text in steps array
];

const features = [
  {
    title: "Global Marketplace",
    description:
      "Find offers in multiple currencies around the world; trade with local or international buyers and sellers wherever you are",
    icon: "/icons/world.svg",
  },
  {
    title: "Track Performance",
    description:
      "Monitor gains, losses, and overall portfolio value in real-time.",
    icon: "/icons/trend-up.svg",
    mobileIcon: "/icons/trend-up-mobile.svg",
  },
  {
    title: "Set Alerts",
    description: "Get notifications for market trends and price changes.",
    icon: "/icons/status-up.svg",
    mobileIcon: "/icons/status-up-mobile.svg",
  },
];

export default function P2PTradingPage() {
  return (
    <>
      <HeroSection
        title="Trade Directly, No Middleman"
        description="Trade crypto directly with others worldwide. CashPay’s P2P marketplace connects buyers and sellers with secure escrow protection—so you can set your price, choose payment methods, and trade confidently"
        imageSrc="/images/backgrounds/p2p-trading-bg.jpg"
        imageAlt="P2P Trading Background"
        bgDark="high"
      />
      <CryptoGatewayBanner className="py-20">
        <PromoBanner
          isFullWidth={false}
          title="Freedom to Trade"
          description="Connect directly with global traders in a secure, escrow-protected marketplace. Set your price, pick your method, and trade your way."
        />
      </CryptoGatewayBanner>
      <HowItWorksSection
        steps={steps}
        imagePosition="right"
        imageSrc="/icons/iPhones/merchant-iPhone.svg"
        imageClasses="h-full w-full"
        imageAlt="CashPay Mobile App"
        description="Securely store, send, and receive cryptocurrencies with ease, all in one place."
        ellipseClassName="bottom-[-180px] min-[450px]:bottom-[-250px] sm:bottom-[-370px]  lg:bottom-[-220px] xl:bottom-[-300px] 2xl:bottom-[-300px] center-x-1/2 left-[50px] lg:left-[0px] xl:left-[70px] "
      />
      <ThreeColumnCards features={features} />
    </>
  );
}
