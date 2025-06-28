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
  imageAlt?: string;
  imagePosition?: "left" | "right";
  imageClasses?: string;
  className?: string;
}

export default function HowItWorksSection({
  title = "How It Works",
  description,
  steps,
  imageSrc,
  imageAlt = "Mobile App",
  imagePosition = "left",
  imageClasses = "w-[400px] h-[400px] lg:w-[450px] lg:h-[780px] xl:w-[500px] xl:h-[781px] max-[450px]:w-[350px] max-[450px]:h-[350px] max-[380px]:w-[300px] max-[380px]:h-[300px]",
  className = "",
}: HowItWorksSectionProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section
      className={`py-10 bg-dark-mode-bg max-[450px]:max-h-[1150px] max-[500px]:pb-30 max-[380px]:max-h-[1200px] ${className}`}
    >
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div
              className={`flex justify-center lg:justify-start ${
                isImageLeft ? "order-1 lg:order-1" : "order-2 lg:order-2"
              } ${!isImageLeft ? "lg:justify-end" : ""}`}
            >
              <div className="relative">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={`relative ${imageClasses}`}
                />
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`${
                isImageLeft ? "order-2 lg:order-2" : "order-1 lg:order-1"
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
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[auto_1fr] gap-3 items-start"
                  >
                    <span
                      className={`text-base sm:text-[20px] text-white font-plus-jakarta leading-[1.4] ${
                        index === 0 ? "relative left-[2px]" : ""
                      }`}
                    >
                      {step.number}
                    </span>
                    <p
                      className={`text-white font-[400] text-base sm:text-[20px] font-plus-jakarta leading-[1.4] m-0 relative top-[-2px]   ${
                        step.text.startsWith("S") ? "relative left-[4px]" : step.text.startsWith("G") ? "relative left-[-4px]" : ""
                      }`}
                    >
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
