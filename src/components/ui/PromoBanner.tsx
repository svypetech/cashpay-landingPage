import Image from "next/image";

interface PromoBannerProps {
  title: string;
  showLogo?: boolean;
  logoPath?: string;
  className?: string;
  description?: string;
  isFullWidth?: boolean;
  showNoiseEffect?: boolean;
}

export default function PromoBanner({
  title,
  showLogo = false,
  logoPath = "/icons/white-logo.svg",
  className = "",
  description = "",
  isFullWidth = true,
  showNoiseEffect = true,
}: PromoBannerProps) {
  return (
    <div
      className={`relative w-full  ${!isFullWidth ? "" : ""} ${
        isFullWidth
          ? "px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 h-[408px]"
          : "sm:px-[40px] max-w-[99%] rounded-[12px] sm:rounded-[24px] h-[478px] sm:h-[408px]"
      } flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(90deg, #C7D8FF 0%, #27AAE1 25%, #061F51 75%, #000000 100%)`,
        boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.24)",
      }}
    >
      {/* Noise Texture Overlay - Lighter approach to preserve colors */}
      {showNoiseEffect && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url("/images/noise-effect.jpg")',
            backgroundSize: "300px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            mixBlendMode: "multiply",
            opacity: 0.55,
          }}
        />
      )}

      {/* Background Image */}

      {/* Main Text Content */}
      <div
        className={`relative z-10 mt-4  min-[450px]:mt-0 ${
          isFullWidth
            ? "max-w-7xl mx-auto w-full"
            : "flex flex-col justify-center max-w-[80%]"
        }`}
      >
        <h2
          className={`text-white text-4xl md:text-5xl lg:text-5xl xl:text-[50px] leading-tight ${
            isFullWidth ? "font-bold" : "font-[700]"
          } `}
        >
          {title}
        </h2>
        {description && (
          <p className="text-white text-lg  sm:text-[22px] font-[700] mt-8 sm:max-w-full max-w-[250px]">
            {description}
          </p>
        )}
      </div>

      {/* Optional Logo - Bottom Right */}
      {showLogo && (
        <div className="absolute bottom-6 min-[450px]:bottom-8 right-4 min-[450px]:right-15 z-10">
          <Image
            src={logoPath}
            alt="Logo"
            width={120}
            height={40}
            className="w-auto h-6 min-[450px]:h-8 opacity-90"
          />
        </div>
      )}
    </div>
  );
}
