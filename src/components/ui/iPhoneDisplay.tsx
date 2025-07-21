interface iPhoneDisplayProps {
  className?: string;
}

export default function iPhoneDisplay({ className = "" }: iPhoneDisplayProps) {
  return (
    <div className={` ${className}`}>
      <img
        src="/images/iPhone-14.png"
        alt="iPhone 14"
        className="w-full h-full scale-110"
      />
    </div>
  );
}
