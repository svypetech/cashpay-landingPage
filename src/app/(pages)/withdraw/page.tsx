import HeroSection from "@/src/components/ui/HeroSection";
import Cards from "@/src/components/withdraw/Cards";
import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import PromoBanner from "@/src/components/ui/PromoBanner";
import CryptoGatewayBanner from "@/src/components/ui/CryptoGatewayBanner";

export default function WithdrawPage() {
  const withdrawSteps = [
    {
      number: "1.",
      text: "Select your preferred withdrawal method - crypto or fiat.",
    },
    {
      number: "2.",
      text: "Enter the destination wallet address or bank account details.",
    },
    {
      number: "3.",
      text: "Confirm the amount and review transaction fees.",
    },
    {
      number: "4.",
      text: "Complete the secure withdrawal and track your transaction.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Withdraw Anytime, Anywhere"
        description="Cash out your assets in seconds or days—whatever suits you. Send crypto to any wallet address or convert to fiat and withdraw to your bank, all with clear rates and secure processing"
        imageSrc="/images/withdraw-bg.jpg"
        imageAlt="Withdraw Background"
        buttonText="Download now"
        buttonSize="lg"
      />
      <Cards />
      <HowItWorksSection
        title="How It Works"
        description="Withdrawing your funds is simple and secure. Choose your preferred method and get your money where you need it."
        steps={withdrawSteps}
        imageSrc="/icons/withdraw-phones.svg"
        imageAlt="Withdraw Process Mobile App"
        imagePosition="right"
        imageClasses="w-[400px] h-[400px] sm:w-[440px] sm:h-[636px] xl:w-[500px] xl:h-[663px] max-[450px]:w-[350px] max-[450px]:h-[350px] max-[380px]:w-[300px] max-[380px]:h-[300px]"
      />
      <CryptoGatewayBanner className="py-25">
        <PromoBanner
          isFullWidth={false}
          text="Cash out your crypto effortlessly with fast and secure withdrawal options for all users."
          showNoiseEffect={false}
          className=""
        />
      </CryptoGatewayBanner>
    </>
  );
}
