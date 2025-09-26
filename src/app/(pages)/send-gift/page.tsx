import ThreeColumnCards from "@/src/components/swap/ThreeColumnCards";
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
const giftFeatures = [
  {
    title: "Easy Gift Setup",
    description: "Choose an amount and cryptocurrency, then add a custom note and get a unique gift link or code",
    icon: "/icons/envelope.svg",
  },
  {
    title: "Instant Delivery",
    description: "Send via text, email, or social; recipients receive crypto instantly and redeem it with one click",
    icon: "/icons/hand-coin.svg",
  },
  {
    title: "No App Required",
    description: "Gifts work with any wallet—recipients don’t need CashPay to claim the crypto you send",
    icon: "/icons/gift.svg",
  }
]
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
        imageSrc="/icons/gift-iPhone.svg"
        imagePosition="bottom"
        imageClasses="w-full h-full"
        mobileImageSrc="/icons/gift-iPhone-mobile.svg"
      />
      <ThreeColumnCards features={giftFeatures} />
    </>
  );
}
