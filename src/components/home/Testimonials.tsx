"use client";

import { useState } from "react";
import TestimonialCard from "@/src/components/home/TestimonialCard";
import Image from "next/image";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "CashPay is a game-changer! The portfolio tracking and real-time alerts help me make smarter decisions. It's my go-to app for everything crypto.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Switching between personal and merchant modes is seamless. Managing my listings and orders has never been easier. CashPay truly understands what merchants need.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "I was new to crypto, but CashPay's avatar-friendly interface made it easy to start. Sending and receiving crypto is so simple, and knowing my assets are protected gives me peace of mind.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "The security features and ease of use make CashPay my preferred crypto platform. Highly recommended!",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "CashPay's customer support is exceptional. They helped me resolve my issues quickly and efficiently.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 6,
      quote:
        "CashPay is a game-changer! The portfolio tracking and real-time alerts help me make smarter decisions. It's my go-to app for everything crypto.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 7,
      quote:
        "Switching between personal and merchant modes is seamless. Managing my listings and orders has never been easier. CashPay truly understands what merchants need.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 8,
      quote:
        "I was new to crypto, but CashPay's avatar-friendly interface made it easy to start. Sending and receiving crypto is so simple, and knowing my assets are protected gives me peace of mind.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 9,
      quote:
        "The security features and ease of use make CashPay my preferred crypto platform. Highly recommended!",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 10,
      quote:
        "CashPay's customer support is exceptional. They helped me resolve my issues quickly and efficiently.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 11,
      quote:
        "CashPay is a game-changer! The portfolio tracking and real-time alerts help me make smarter decisions. It's my go-to app for everything crypto.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 12,
      quote:
        "Switching between personal and merchant modes is seamless. Managing my listings and orders has never been easier. CashPay truly understands what merchants need.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 13,
      quote:
        "I was new to crypto, but CashPay's avatar-friendly interface made it easy to start. Sending and receiving crypto is so simple, and knowing my assets are protected gives me peace of mind.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 14,
      quote:
        "The security features and ease of use make CashPay my preferred crypto platform. Highly recommended!",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
    {
      id: 15,
      quote:
        "CashPay's customer support is exceptional. They helped me resolve my issues quickly and efficiently.",
      name: "Tristan Parker",
      avatar: "/images/avatar.png",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-40 bg-white">
      <div className="w-full md:pl-16 lg:pl-10 xl:pl-20 2xl:pl-30">
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-6 ">
              Hear From Our Users
            </h2>
            <p className="text-base sm:text-lg text-secondaryText max-w-2xl lg:max-w-3xl mx-auto font-[600]  px-4 sm:px-0">
              Trusted by thousands—discover how CashPay is transforming lives in
              the crypto world
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative pb-16 sm:pb-18 lg:pb-0">
            {/* Desktop: Show 2.5 cards (2 full + 1 partial) */}
            <div className="hidden lg:block ml-[-10px]">
              <div
                className="overflow-hidden"
                style={{  maxWidth: "100%" }}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out gap-[25px]"
                  style={{
                    transform: `translateX(-${currentIndex * (520 + 10)}px)`,
                    width: `${testimonials.length * (520 + 10)}px`,
                  }}
                >
                  {testimonials.map(
                    (testimonial, index) => (
                      <TestimonialCard
                        key={index}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        avatar={testimonial.avatar}
                        rating={testimonial.rating}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Below 1024px: Show 1 card with same animation as desktop */}
            <div className="lg:hidden">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 flex justify-center px-3 sm:px-4"
                    >
                      <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px]">
                        <TestimonialCard
                          quote={testimonial.quote}
                          name={testimonial.name}
                          avatar={testimonial.avatar}
                          rating={testimonial.rating}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 lg:bottom-[-70px] lg:right-8">
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E0E0E0] bg-white flex items-center justify-center shadow-sm"
                >
                  <Image
                    src="/icons/previous.svg"
                    alt="Previous"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1B4284] text-white flex items-center justify-center shadow-sm"
                >
                  <Image
                    src="/icons/next.svg"
                    alt="Next"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
