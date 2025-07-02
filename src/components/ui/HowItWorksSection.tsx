// "use client";
import React from "react";

interface Step {
  number: string;
  text: string;
}

interface HowItWorksSectionProps {
  title?: string;
  description: string;
  steps: Step[];
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "bottom";
  imageClasses?: string;
  className?: string;
  singleColumn?: boolean; // New prop
}

export default function HowItWorksSection({
  title = "How It Works",
  description,
  steps,
  imageSrc,
  mobileImageSrc,
  imageAlt = "Mobile App",
  imagePosition = "left",
  imageClasses = "w-[400px] h-[400px] lg:w-[450px] lg:h-[780px] xl:w-[500px] xl:h-[781px] max-[450px]:w-[350px] max-[450px]:h-[350px] max-[380px]:w-[300px] max-[380px]:h-[300px]",
  className = "",
  singleColumn = false, // Default to false
}: HowItWorksSectionProps) {
  const isImageLeft = imagePosition === "left";
  const isImageRight = imagePosition === "right";
  const isImageBottom = imagePosition === "bottom";

  // Single Column Layout
  if (singleColumn) {
    return (
      <section className={`py-40 bg-dark-mode-bg ${className}`}>
        <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Content Section - Container Centered */}
            <div className="flex justify-center mb-16">
              <div className="max-w-2xl">
                {/* Header */}
                <div className="mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-plus-jakarta leading-tight">
                    {title}
                  </h2>
                  <p className="text-lg text-dark-mode-secondaryText font-[400] font-plus-jakarta leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Steps List */}
                <ol className="space-y-6 list-none counter-reset-steps">
                  {steps.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 counter-increment-step"
                    >
                      <span className="text-lg text-white font-plus-jakarta leading-[1.4] flex-shrink-0 ">
                        {step.number}
                      </span>
                      <p className="text-white font-[400] text-[20px] font-plus-jakarta leading-[1.4] m-0">
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Image Section - Centered */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={`${imageClasses} w-full h-full`}
                />
              </div>
            </div>
          </div>
        </div>

        
      </section>
    );
  }

  // Original layouts (left/right/bottom) - unchanged
  return (
    <section
      className={`${
        isImageBottom ? "relative" : ""
      } py-20 bg-dark-mode-bg max-[450px]:max-h-[1150px] max-[500px]:pb-30 max-[380px]:max-h-[1200px] ${
        isImageBottom ? "overflow-hidden sm:py-40" : ""
      } ${className}`}
    >
      {/* Bottom positioned image - absolutely positioned like DownloadSection */}
      {isImageBottom && (
        <>
          {/* Desktop Image */}
          <div className="absolute lg:bottom-[0px] bottom-[-100px] right-0 hidden lg:block">
            <img
              src={imageSrc}
              alt={imageAlt}
              className={`relative ${imageClasses}`}
            />
          </div>
        </>
      )}

      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div
            className={`${
              isImageBottom
                ? "grid lg:grid-cols-2 gap-16 items-center"
                : "grid lg:grid-cols-2 gap-16 items-center"
            }`}
          >
            {/* Image Section - only for left/right positions */}
            {!isImageBottom && (
              <div
                className={`flex justify-center lg:justify-start ${
                  isImageLeft ? "order-1 lg:order-1" : "order-2 lg:order-2"
                } ${!isImageLeft ? "lg:justify-end" : ""}`}
              >
                <div className="relative">
                  {/* Desktop Image */}
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className={`relative ${imageClasses} hidden lg:block`}
                  />

                  {!mobileImageSrc && (
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className={`relative ${imageClasses} block lg:hidden`}
                    />
                  )}

                  {/* Mobile Image - if provided */}
                </div>
              </div>
            )}

            {/* Content Section */}
            <div
              className={`${
                isImageBottom
                  ? "relative z-10 "
                  : isImageLeft
                  ? "order-2 lg:order-2"
                  : "order-1 lg:order-1"
              }`}
            >
              {/* Header */}
              <div className="mb-12">
                <h2 className="w-full text-4xl lg:text-5xl font-bold text-white mb-6 font-plus-jakarta leading-tight">
                  {title}
                </h2>
                <p className="text-lg text-dark-mode-secondaryText font-[400] font-plus-jakarta leading-relaxed max-w-lg">
                  {description}
                </p>
              </div>

              {/* Steps List */}
              <ol className="space-y-6 list-none counter-reset-steps">
                {steps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 counter-increment-step"
                  >
                    <span className="text-lg text-white font-plus-jakarta leading-[1.4] flex-shrink-0">
                      {step.number}
                    </span>
                    <p className="text-white font-[400] text-[20px] font-plus-jakarta leading-[1.4] m-0">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            {isImageBottom && mobileImageSrc && (
              <div className="block lg:hidden flex justify-center">
                <img
                  src={mobileImageSrc}
                  alt={imageAlt}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
