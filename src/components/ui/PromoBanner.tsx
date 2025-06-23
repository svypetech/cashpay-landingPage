import Image from "next/image";

interface PromoBannerProps {
  text: string;
  showLogo?: boolean;
  logoPath?: string;
  className?: string;
  description?: string;
  isFullWidth?: boolean;
}

export default function PromoBanner({
  text,
  showLogo = false,
  logoPath = "/icons/white-logo.svg",
  className = "",
  description = "",
  isFullWidth = true,
}: PromoBannerProps) {
  return (
    <div
      className={`relative w-full h-[478px] ${!isFullWidth ? "max-w-[99%]   rounded-[24px]" : ""} p-[20px] px-[40px] flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(90deg, #C7D8FF 0%, #27AAE1 25%, #061F51 75%, #000000 100%)`,
        boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.24)",
      }}
    >
      {/* Noise Texture Overlay - Lighter approach to preserve colors */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/images/noise-effect.jpg")',
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          mixBlendMode: "multiply", // Changed from 'multiply' to 'overlay'
          opacity: 0.55, // Reduced from 0.24 to 0.15
          //   filter: "grayscale(100%) contrast(150%)",
        }}
      />

      {/* Alternative subtle noise layer */}

      {/* Main Text Content */}
      <div className="relative z-10 mt-4 min-[450px]:mt-0">
        <h2 className="text-white text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-[700] font-plus-jakarta leading-tight">
          {text}
        </h2>
        {description && (
          <p className="text-white text-sm min-[450px]:text-base sm:text-[24px] font-[700] font-plus-jakarta mt-8">
            {description}
          </p>
        )}
      </div>

      {/* Optional Logo - Bottom Right */}
      {showLogo && (
        <div className="absolute bottom-4 min-[450px]:bottom-8 right-4 min-[450px]:right-15 z-10">
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
