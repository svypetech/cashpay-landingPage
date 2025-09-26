import Image from "next/image";

interface PlayStoreButtonProps {
  href?: string;
  className?: string;
}

export default function PlayStoreButton({ href = "#", className = "" }: PlayStoreButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center bg-gradient-to-b from-gray-800/90 to-gray-900/95 border border-gray-600/50 rounded-[8px] px-4 py-2.5 hover:from-gray-700/90 hover:to-gray-800/95 transition-all duration-200 ${className}`}
      style={{ width: '140px', height: '42px' }}
    >
      <Image
        src="/images/playstore.png"
        alt="Google Play"
        width={20}
        height={20}
        className="w-5 h-5 mr-2.5 flex-shrink-0"
      />
      <div className="text-left flex-1">
        <div className="text-[9px] text-white/90 font-normal leading-tight">
          Get it on
        </div>
        <div className="text-[13px] font-semibold text-white leading-tight">
          Google Play
        </div>
      </div>
    </a>
  );
}