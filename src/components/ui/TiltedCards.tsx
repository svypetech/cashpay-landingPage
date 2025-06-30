import Image from "next/image";

interface TiltedCardsProps {
  frontCardSrc: string;
  backCardSrc: string;
  frontCardAlt?: string;
  backCardAlt?: string;
  className?: string;
}

export default function TiltedCards({
  frontCardSrc,
  backCardSrc,
  frontCardAlt = "Front Card",
  backCardAlt = "Back Card",
  className = "",
}: TiltedCardsProps) {
  return (
    <div className={`relative bg-red-500 w-[300px] ml-[-150px] left-[100px] sm:left-[100px] lg:left-[150px] xl:left-[100px] top-[-80px] min-[1200px]:w-[500px]   ${className}`}>
      {/* Back Card - Red/Left Card */}
      <div className="absolute top-0 left-0 transform rotate-[-12] translate-x-[-90px] sm:translate-x-[-130px] translate-y-8 ">
        <Image
          src={backCardSrc}
          alt={backCardAlt}
          width={300}
          height={600}
          className="w-[100%] h-[100%] sm:w-[100%] sm:h-[100%] object-contain drop-shadow-lg"
        />
      </div>

      {/* Front Card - Black/Right Card */}
      <div className="absolute top-0 right-0 transform  translate-x-2 translate-y-4 z-10">
        <Image
          src={frontCardSrc}
          alt={frontCardAlt}
          width={300}
          height={600}
          className="w-[100%] h-[100%] sm:w-[100%] sm:h-[100%] object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}