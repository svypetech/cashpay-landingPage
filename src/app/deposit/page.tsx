import DepositHeroSection from "@/src/components/deposit/HeroSection";
import HowItWorksSection from "@/src/components/deposit/HowItWorks";
import PromoBanner from "@/src/components/ui/PromoBanner";
import Cards from "@/src/components/deposit/Cards";
export default function DepositPage() {
  return (
    <>
      <DepositHeroSection />
      <PromoBanner
        text="Fuel Your Wallet in Seconds"
        description="Whether you're transferring crypto or buying with fiat, CashPay makes deposits quick, easy, and completely hassle-free."
      />
      <HowItWorksSection />
      <Cards />
    </>
  );
}
