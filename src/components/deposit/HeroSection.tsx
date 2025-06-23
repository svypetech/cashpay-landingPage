import Image from "next/image";
import Button from "@/src/components/ui/Button";

export default function DepositHeroSection() {
  return (
    <section className="min-h-screen bg-black">
      {/* Masked Background Container */}
      <div className="relative min-h-screen overflow-hidden rounded-lg">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/deposit-bg.jpg"
            alt="Deposit Background"
            className="w-full h-full object-top"
            layout="fill"
            
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-plus-jakarta">
              Quick, Secure Funding
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-[18px] text-white font-[400] mb-8 max-w-3xl mx-auto leading-relaxed font-plus-jakarta opacity-80">
              Fund your CashPay wallet effortlessly. Send crypto from any
              external address or use our fiat on-ramp to buy crypto via bank
              transfer or card—available 24/7
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Download now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
