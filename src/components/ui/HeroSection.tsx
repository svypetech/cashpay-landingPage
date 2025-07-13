import Image from "next/image";
import Button from "@/src/components/ui/Button";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonSize?: "sm" | "md" | "lg";
  className?: string;
  iconPath?: string;
  bgDark?: "low" | "medium" | "high" ; // Optional prop to control background color
}

export default function HeroSection({
  title,
  description,
  imageSrc,
  imageAlt = "Hero Background",
  showButton = true,
  buttonText = "Download now",
  iconPath,
  buttonSize = "lg",
  className = "",
  bgDark = "low"
}: HeroSectionProps) {
  return (
    <section className={`min-h-screen bg-black `}>
      {/* Masked Background Container */}
      <div className="relative min-h-screen overflow-hidden rounded-lg">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className={`w-full h-full max-[1024px]:object-cover ${className}`}
            layout="fill"
          />
          <div className={`absolute inset-0 ${bgDark === "medium" ? "bg-black/70" : bgDark === "high"  ? "bg-black/80" : "bg-black/60"}`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight plus-jakarta-sans">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-[18px] text-white font-[300] mb-8 max-w-3xl  leading-relaxed font-plus-jakarta opacity-80">
              {description}
            </p>

            {/* CTA Button */}
            {showButton && (
              <div className="flex justify-center">
                <Button iconPath={iconPath} size={buttonSize}>
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
