import CardsLifestyleSection from "@/src/components/cards/CardsLifestyleSection";
import CardTypesSection from "@/src/components/cards/CardTypesSection";
import HeroSection from "@/src/components/ui/HeroSection";
import PromoBanner from "@/src/components/ui/PromoBanner";

export default function Cards() {
  return (
    <>
      <HeroSection
        title="Your Crypto, Everywhere"
        description="From shopping online to paying in-store, CashPay cards make crypto a part of your everyday life. Spend with confidence, anywhere."
        imageSrc="/images/backgrounds/cards-bg.jpg"
        imageAlt="Cards Background"
        buttonText="Download now"
        buttonSize="lg"
        className="object-cover object-right"
        bgDark="high" // Assuming you want a dark background for this section
      />
      <CardTypesSection />
      <PromoBanner
        title="Experience financial freedom with CashPay cards—spend crypto anywhere, anytime, effortlessly."
        className="h-[500px] "
      />
      <CardsLifestyleSection />
    </>
  );
}
