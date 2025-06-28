import CryptoGatewayBanner from "@/src/components/ui/CryptoGatewayBanner";
import HeroSection from "@/src/components/ui/HeroSection";
import HowItWorksSection from "@/src/components/ui/HowItWorksSection";
import PromoBanner from "@/src/components/ui/PromoBanner";

const steps = [
  {
    number: "1.",
    text: "Enter the recipient’s wallet address or email ID.",
  },
  {
    number: "2.",
    text: "Specify the crypto amount and add a personalized message.",
  },
  {
    number: "3.",
    text: "Confirm and send the gift with instant delivery.",
  },
];
export default function SendGiftPage() {
  return (
    <>
      <HeroSection
        title="Gift Crypto, Share Joy"
        description="Surprise someone with crypto. CashPay’s Crypto Gift feature lets you send Bitcoin, Ethereum, or any supported coin with a personalized message—perfect for birthdays, holidays, or special moments"
        imageSrc="/images/backgrounds/send-gift-bg.jpg"
        imageAlt="Gift Background"
        buttonText="Download now"
        buttonSize="lg"
        className="object-contain"
      />
      <CryptoGatewayBanner className="py-20">
        <PromoBanner
          title="We Make Every Occasion Memorable, Your Rules"
          description="Whether it’s a birthday or a simple thank-you, sending crypto with CashPay is the modern way to gift. Simple, thoughtful, unforgettable."
          isFullWidth={false}
          showNoiseEffect={true}
        />
      </CryptoGatewayBanner>
      <HowItWorksSection
        description="Sending a thoughtful crypto gift is just a few clicks away. Let’s walk you through the process"
        steps={steps}
        imageSrc="/icons/send-gift-iphone.svg"
        imagePosition="right"
        imageClasses="w-[1084px] h-[629px] relative"
        
        

      />
    </>
  );
}
