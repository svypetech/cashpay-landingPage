interface iPhoneDisplayProps {
  className?: string;
}

export default function iPhoneDisplay({ className = "" }: iPhoneDisplayProps) {
  return (
    <div className={` ${className}`}>
      <img
        src="/icons/iPhones/horizontal-home-iPhone.svg"
        alt="iPhone 14"
        className="w-full h-full scale-110 hidden md:block"
      />
      <img
        src="/icons/iPhones/horizontal-home-iPhone-mobile.svg"
        alt="iPhone 14"
        className="w-full h-full scale-110 block md:hidden scale-110"
      />
    </div>
  );
}
