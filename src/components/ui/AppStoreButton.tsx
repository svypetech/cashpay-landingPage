import Image from "next/image";

interface AppStoreButtonProps {
  href?: string;
  className?: string;
}

export default function AppStoreButton({ href = "#", className = "" }: AppStoreButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center bg-gradient-to-b from-gray-800/90 to-gray-900/95 border border-gray-600/50 rounded-[8px] px-4 py-2.5 hover:from-gray-700/90 hover:to-gray-800/95 transition-all duration-200 ${className}`}
      style={{ width: '140px', height: '42px' }}
    >
      <Image
        src="/images/apple.png"
        alt="Apple"
        width={20}
        height={24}
        className="w-5 h-6 mr-2.5 flex-shrink-0"
      />
      <div className="text-left flex-1">
        <div className="text-[9px] text-white/90 font-normal leading-tight">
          Available on the
        </div>
        <div className="text-[13px] font-semibold text-white leading-tight">
          App Store
        </div>
      </div>
    </a>
  );
}