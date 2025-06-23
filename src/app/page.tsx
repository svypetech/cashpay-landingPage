import HeroSection from "@/src/components/home/HeroSection";
import WhatSetsUsApart from "@/src/components/home/WhatSetsUsApart";
import CryptoGatewayBanner from "@/src/components/home/CryptoGatewayBanner";
import IphoneSection from "@/src/components/home/iPhoneSection";
import HowCashPayWorks from "@/src/components/home/HowCashPayWorks";
import CryptoForMerchants from "@/src/components/home/CryptoForMerchants";
import Testimonials from "@/src/components/home/Testimonials";
import DownloadSection from "@/src/components/home/DownloadSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatSetsUsApart />
      <CryptoGatewayBanner />
      <IphoneSection />
      <HowCashPayWorks />
      <CryptoForMerchants />
      <Testimonials />
      <DownloadSection />
    </>
  );
}
