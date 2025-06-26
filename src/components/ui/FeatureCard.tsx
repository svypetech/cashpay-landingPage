import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconBgColor?: string;
  className?: string;
  titleClassName?: string;
  iconClassName?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  iconBgColor = "#2156C11A",
  className = "",
  titleClassName = "",
  iconClassName = "",
}: FeatureCardProps) {
  return (
    <div 
      className={`bg-white py-10 px-8 rounded-[12px] transition-all duration-300 max-w-full lg:max-w-[358px] h-[264px]  ${className}`}
      style={{
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.08)',
        filter: 'blur(0px)'
      }}
    >
      {/* Icon Circle - Centered at top */}
      <div className="mb-6">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src={icon}
            alt={title}
            width={28}
            height={28}
            className={`w-[28px] h-[28px] ${iconClassName}`}
          />
        </div>
      </div>

      {/* Title - Centered */}
      <h3 className={`font-[700] text-black text-2xl sm:text-4xl   ${titleClassName ? titleClassName : 'text-xl mb-2'}`}>
        {title}
      </h3>

      {/* Description - Centered */}
      <p className="text-[#333333] font-[400] font-[14px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}