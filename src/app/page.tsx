import HeroSection from "@/src/components/home/HeroSection";
import WhatSetsUsApart from "@/src/components/home/WhatSetsUsApart";
import CryptoGatewayBanner from "@/src/components/ui/CryptoGatewayBanner";
import IphoneSection from "@/src/components/home/iPhoneSection";
import HowCashPayWorks from "@/src/components/home/HowCashPayWorks";
import CryptoForMerchants from "@/src/components/home/CryptoForMerchants";
import Testimonials from "@/src/components/home/Testimonials";
import DownloadSection from "@/src/components/home/DownloadSection";
import PromoBanner from "../components/ui/PromoBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatSetsUsApart />
      <CryptoGatewayBanner className="py-20">
        <PromoBanner
          title="Your all-in-one hub for secure P2P trading, instant payments, and rewards."
          showLogo={true}
          isFullWidth={false}
        />
      </CryptoGatewayBanner>
      <IphoneSection />
      <HowCashPayWorks />
      <CryptoForMerchants />
      <Testimonials />
      <DownloadSection />
    </>
  );
}
