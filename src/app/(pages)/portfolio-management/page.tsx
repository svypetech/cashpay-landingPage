import HeroSection from "@/src/components/ui/HeroSection";
import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import InvestmentSection from "@/src/components/portfolio/Investments";
const features = [
  {
    number: "1.",
    text: "Sync your wallet to automatically fetch portfolio data.",
  },
  {
    number: "2.",
    text: "Analyze your portfolio performance with gains/losses tracking.",
  },
  {
    number: "3.",
    text: "Set up real-time alerts for price fluctuations.",
  },
  {
    number: "4.",
    text: "Monitor asset trends and optimize your investments.",
  },
];
export default function PortfolioManagementPage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/backgrounds/portfolio-bg.jpg"
        title="Track Your Entire Portfolio"
        description="Stay on top of every asset’s performance in real time. CashPay’s portfolio manager provides instant insights on holdings, gains/losses, and allocation so you can make data-driven decisions"
        bgDark="high"
        buttonSize="lg"
        buttonText="Download Now"
      />
      <HowItWorksSection
        description="Track, analyze, and optimize your crypto holdings with ease—here’s how to make the most of your portfolio"
        imageSrc="/icons/iPhones/portfolio-iphone.svg"
        imagePosition="left"
        steps={features}
        imageClasses="w-full h-full"
        isDark={false}
      />
      <InvestmentSection />
    </>
  );
}
