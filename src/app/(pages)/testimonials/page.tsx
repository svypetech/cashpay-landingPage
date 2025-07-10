import React from "react";
import HeroSection from "@/src/components/ui/HeroSection";
import StatsGrid from "@/src/components/testimonials/StatsGrid";

export default function AboutUsPage() {
  return (
    <>
      <HeroSection
        title="Why Millions Trust CashPay"
        description="Start your journey with us today!"
        imageSrc="/images/backgrounds/about-bg.jpg"
        imageAlt="About CashPay Background"
        showButton={false}
        bgDark="high"
      />
      <StatsGrid />
      {/* Add other about us sections here */}
    </>
  );
}