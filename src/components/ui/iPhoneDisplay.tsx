import Image from "next/image";

interface iPhoneDisplayProps {
  className?: string;
}

export default function iPhoneDisplay({ className = "" }: iPhoneDisplayProps) {
  return (
    <div className={` ${className}`}>
      <img
        src="/images/iPhone-14.png"
        alt="iPhone 14"
        className="w-[1512px] max-h-[200px] md:max-h-[300px] lg:max-h-[395px] object-contain"
      />
    </div>
  );
}
