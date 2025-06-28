import HeroSection from "@/src/components/ui/HeroSection";
import Cards from "@/src/components/withdraw/Cards";
import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import PromoBanner from "@/src/components/ui/PromoBanner";
import CryptoGatewayBanner from "@/src/components/ui/CryptoGatewayBanner";

export default function WithdrawPage() {
  const withdrawSteps = [
    {
      number: "1.",
      text: "Select crypto or fiat for your withdrawal method.",
    },
    {
      number: "2.",
      text: "Enter the amount and provide the destination wallet or bank account.",
    },
    {
      number: "3.",
      text: "Confirm the withdrawal, and track its status until completed.",
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
        imageClasses="w-[440px] h-[636px] xl:w-[500px] xl:h-[663px] max-[450px]:w-[350px] max-[450px]:h-[350px] max-[380px]:w-[300px] max-[380px]:h-[300px]"
      />
      <CryptoGatewayBanner className="py-25">
        <PromoBanner
          isFullWidth={false}
          title="Cash out your crypto effortlessly with fast and secure withdrawal options for all users."
          showNoiseEffect={false}
        />
      </CryptoGatewayBanner>
    </>
  );
}
