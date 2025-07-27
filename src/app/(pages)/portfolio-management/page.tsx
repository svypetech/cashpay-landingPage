import HeroSection from "@/src/components/ui/HeroSection";
import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import InvestmentSection from "@/src/components/portfolio/Investments";

import ThreeColumnCards from "@/src/components/swap/ThreeColumnCards";
const steps = [
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
const features = [
  {
    title: "Real-Time Dashboard",
    description:
      "View your total balance, gains/losses, and individual holdings at a glance",
    icon: "/icons/mobile.svg",
  },
  {
    title: "Detailed Analytics",
    description:
      "Dive into charts and historical data for each asset to fine-tune your strategy",
    icon: "/icons/trend-up.svg",
    mobileIcon: "/icons/trend-up-mobile.svg",
  },
  {
    title: "Alerts & Reports",
    description:
      "Set custom price alerts and export portfolio reports to stay informed of market movements",
    icon: "/icons/chart.svg",
    mobileIcon: "/icons/chart-mobile.svg",
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
        steps={steps}
        imageClasses="w-full h-full"
        isDark={false}
        ellipseClassName="bottom-[-320px] min-[400px]:bottom-[-380px] min-[500px]:bottom-[-510px] lg:bottom-[-420px] 2xl:bottom-[-480px] center-x-1/2 left-[50px]"
      />
      <InvestmentSection />
      <ThreeColumnCards features={features} />
    </>
  );
}
