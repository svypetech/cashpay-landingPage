import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import PromoBanner from "@/src/components/ui/PromoBanner";
import Cards from "@/src/components/deposit/Cards";
import HeroSection from "@/src/components/ui/HeroSection";
const steps = [
  {
    number: "1.",
    text: "Choose crypto or fiat as your deposit method.",
  },
  {
    number: "2.",
    text: "Generate your unique wallet address for crypto deposits.",
  },
  {
    number: "3.",
    text: "Transfer funds securely from your account or other wallets.",
  },
  {
    number: "4.",
    text: "Receive a confirmation and see your updated wallet balance.",
  },
];

export default function DepositPage() {
  return (
    <div className="">
      <HeroSection
        title="Quick, Secure Funding"
        description="Fund your CashPay wallet effortlessly. Send crypto from any external address or use our fiat on-ramp to buy crypto via bank transfer or card—available 24/7"
        imageSrc="/images/deposit-bg.jpg"
        imageAlt="Deposit Background"
        buttonText="Download now"
        buttonSize="lg"
      />
      <PromoBanner
        text="Fuel Your Wallet in Seconds"
        description="Whether you're transferring crypto or buying with fiat, CashPay makes deposits quick, easy, and completely hassle-free."
      />
      <HowItWorksSection
        description="Adding funds to your account is quick and secure. Here's how you can deposit your crypto or fiat"
        steps={steps}
        imageSrc="/icons/double-iphone-vertical.svg"
        imageAlt="CashPay Mobile App"
        imagePosition="left"
        imageClasses="w-[400px] h-[400px]  sm:w-[450px] sm:h-[600px] xl:w-[545px] xl:h-[781px] relative max-[450px]:w-[350px] max-[450px]:h-[350px] max-[380px]:w-[300px] max-[380px]:h-[300px]"
        
      />
      <Cards />
    </div>
  );
}
