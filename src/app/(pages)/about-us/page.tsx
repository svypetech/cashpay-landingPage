import HeroSectionPages from "@/src/components/ui/HeroSectionPages";
import OurMissionSection from "@/src/components/about-us/OurMissionSection";
import WhyCashpay from "@/src/components/about-us/WhyCashpay";
import BottomSection from "@/src/components/about-us/BottomSection";

const missionCards = [
  {
    number: 1,
    text: "Simplify the way people interact with crypto.",
    textSize: "text-[40px] md:text-[50px]",
    highlightWords: ["interact", "with", "crypto."],
  },
  {
    number: 2,
    text: "Provide a secure platform for transactions.",
    textSize: "text-[28px]",
    highlightWords: ["secure", "platform", "for", "transactions."],
  },
  {
    number: 3,
    text: "Empower users to help them grow and manage their assets effortlessly.",
    textSize: "text-[28px]",
    highlightWords: [
      "grow",
      "and",
      "manage",
      "their",
      "assets",
      "effortlessly.",
    ],
  },
  {
    number: 4,
    isImageCard: true,
    imageSrc: "/images/two_iPhones.svg",
    imageAlt: "CashPay Mobile App",
    text: "",
    highlightWords: [],
  },
];

const swapFeatures = [
  {
    icon: "/icons/coins.svg",
    mobileIcon: "/icons/coins.svg", // Update with actual mobile icon
    // Update with actual icon
    title: "All-in-One Platform",
    description:
      "From wallets to portfolio tracking and P2P trading, everything you need is here.",
  },
  {
    icon: "/icons/security-card.svg", // Update with actual icon
    mobileIcon: "/icons/security-card.svg", // Update with actual mobile icon
    title: "Secure by Design",
    description:
      "Hot wallet security with complete transparency and control over your assets.",
  },
  {
    icon: "/icons/smiley-face.svg", // Update with actual icon
    mobileIcon: "/icons/smiley-face.svg", // Update with actual mobile icon
    title: "User-Friendly Experience",
    description:
      "Designed to be simple for beginners and powerful for experts.",
  },
];

export default function Home() {
  // single Column should be true when tailwind md breakpoint is not met
  return (
    <>
      <HeroSectionPages
        title="Empowering Financial Freedom for Everyone"
        description="CashPay is built to make crypto simple, secure, and accessible for all."
        isFullWidth={true}
        showNoiseEffect={false}
      />
      <OurMissionSection
        description="Whether you're a seasoned trader or just starting out, CashPay is here to help you succeed."
        cardDetails={missionCards}
        imageSrc="/icons/iPhones/wallet-iPhone.svg"
        imageClasses=""
        mobileImageSrc="/icons/iPhones/wallet-iPhone-mobile.svg"
      />
      <WhyCashpay features={swapFeatures} />
      <BottomSection />
    </>
  );
}
