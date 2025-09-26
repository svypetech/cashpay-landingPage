import React from "react";
import HeroSectionPages from "@/src/components/ui/HeroSectionPages";
import StatsGrid from "@/src/components/testimonials/StatsGrid";
import Testimonials from "@/src/components/home/Testimonials";
import GlobeSection from "../../../components/testimonials/GlobeSection";

export default function AboutUsPage() {
  return (
    <>
      <HeroSectionPages
        title="Why Millions Trust CashPay"
        description="Start your journey with us today!"
        showNoiseEffect={false}
      />
      <StatsGrid />
      <Testimonials />
      <GlobeSection />
      {/* Add other about us sections here */}
    </>
  );
}