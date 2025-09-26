import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  mobileIcon?: string; // Add mobile icon prop
  title: string;
  description: string;
  iconBgColor?: string;
  className?: string;
  titleClassName?: string;
  iconClassName?: string;
}

export default function FeatureCard({
  icon,
  mobileIcon, // Add mobile icon
  title,
  description,
  iconBgColor = "#2156C11A",
  className = "",
  titleClassName = "",
  iconClassName = "",
}: FeatureCardProps) {
  return (
    <div 
      className={`bg-white py-8 px-8 rounded-[12px] transition-all duration-300 max-w-full lg:max-w-[358px] h-[264px]  ${className}`}
      style={{
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.08)',
        filter: 'blur(0px)'
      }}
    >
      {/* Icon Circle - Centered at top */}
      <div className="mb-6">
        <div 
          className="sm:w-[75px] sm:h-[75px] w-[60px] h-[60px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          {/* Desktop/Tablet Icon - hidden on mobile if mobileIcon exists */}
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className={`w-[40px] h-[40px] ${mobileIcon ? 'hidden sm:block' : ''} ${iconClassName}`}
          />
          
          {/* Mobile Icon - shown only on mobile */}
          {mobileIcon && (
            <Image
              src={mobileIcon}
              alt={title}
              width={32}
              height={32}
              className={`w-[32px] h-[32px] block sm:hidden ${iconClassName}`}
            />
          )}
        </div>
      </div>

      {/* Title - Centered */}
      <h3 className={`font-[700] text-black   ${titleClassName ? titleClassName : 'text-xl mb-2 sm:text-[24px]'}`}>
        {title}
      </h3>

      {/* Description - Centered */}
      <p className="text-[#333333] font-[400] text-[14px] sm:text-[16px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}