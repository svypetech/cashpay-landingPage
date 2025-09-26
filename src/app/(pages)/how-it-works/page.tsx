import VerticalTimeline from "@/src/components/how-it-works/VerticalTimeline";
import HeroSectionPages from "@/src/components/ui/HeroSectionPages";

export default function HowItWorks(){
    return(
        <>
        <HeroSectionPages 
        title="Revolutionize the Way You Manage Crypto"
        description="Simple, secure, and built to help you grow—CashPay puts you in control."
        showNoiseEffect={false}
        
        />
        <VerticalTimeline />
        </>
    )
}