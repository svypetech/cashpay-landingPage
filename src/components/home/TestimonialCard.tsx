import Image from "next/image";
import Rating from "../ui/Rating";

interface TestimonialCardProps {
  quote: string;
  name: string;
  avatar: string;
  rating: number;
}

export default function TestimonialCard({ quote, name, avatar, rating }: TestimonialCardProps) {
  return (
    <div className="w-full max-w-[520px] h-auto min-h-[280px] sm:min-h-[320px] lg:h-[332px] bg-white border-[1px] border-[#E0E0E0] rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[16px] sm:p-[18px] lg:p-[20px] flex flex-col mx-auto">
      {/* Quote Icon */}
      <div className="mb-3 sm:mb-4">
        <Image
          src="/icons/format_quote.svg"
          alt="Quote"
          width={32}
          height={32}
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
        />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-800 text-sm sm:text-base lg:text-base leading-relaxed mb-4 sm:mb-5 lg:mb-6 font-plus-jakarta flex-1">
        {quote}
      </p>

      {/* Rating */}
      <div className="mb-3 sm:mb-4">
        <Rating rating={rating} />
      </div>

      {/* User Info */}
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border-[1px] border-[#E0E0E0] overflow-hidden mr-3 flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-semibold text-gray-900 font-plus-jakarta text-sm sm:text-base">
          {name}
        </span>
      </div>
    </div>
  );
}