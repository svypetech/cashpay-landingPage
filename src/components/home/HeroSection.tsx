import Image from "next/image";
import Button from "@/src/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#000A1D] px-8 sm:px-12 lg:px-[130px]">
      {/* Masked Background Container */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/home-bg.png"
            alt="Crypto Background"
            fill
            className="object-cover opacity-40 rounded-lg"
            priority
            objectPosition="top"
          />
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-plus-jakarta">
              Simplify Your Crypto Experience with CashPay
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-plus-jakarta">
              Manage your crypto assets, track balances, and analyze trends—all
              in one secure platform.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                iconPath="/icons/arrow.svg"
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}
