import HeroSection from "@/src/components/ui/HeroSection";

export default function PortfolioManagementPage() {
    return(
        <>
        <HeroSection
        imageSrc="/images/backgrounds/portfolio-bg.jpg"
        title="Track Your Entire Portfolio"
        description="Stay on top of every asset’s performance in real time. CashPay’s portfolio manager provides instant insights on holdings, gains/losses, and allocation so you can make data-driven decisions"
        bgDark="high"
        buttonSize="lg"
        buttonText="Download Now"
        />
        </>
    )
}