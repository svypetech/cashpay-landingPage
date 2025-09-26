"use client";
import React from "react";

interface Detail {
  number: number;
  text: string;
  textSize?: string; // Optional prop for text size
  isImageCard?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  highlightWords?: string[];
}

interface HowItWorksSectionProps {
  title?: string;
  description: string;
  cardDetails: Detail[];
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "bottom";
  imageClasses?: string;
  className?: string;
  isDark?: boolean; // New prop for dark mode
}

export default function OurMissionSection({
  title = "Our Missson",
  description,
  cardDetails,
  imageSrc,
  mobileImageSrc,
  imageAlt = "Mobile App",
  imagePosition = "left",
  imageClasses = "w-[400px] h-[400px] lg:w-[450px] lg:h-[780px] xl:w-[500px] xl:h-[781px] max-[450px]:w-[350px] max-[450px]:h-[350px] max-[380px]:w-[300px] max-[380px]:h-[300px]",
  className = "",
  isDark = true, // New prop for dark mode
}: HowItWorksSectionProps) {
  const isImageLeft = imagePosition === "left";
  const isImageRight = imagePosition === "right";
  const isImageBottom = imagePosition === "bottom";

  return (
    <section
      className={`py-20 md:py-40 ${
        isDark ? "bg-dark-mode-bg" : "bg-white"
      }  ${className}`}
    >
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Content Section - Container Centered */}
          <div className="flex justify-center mb-16">
            <div className="w-full">
              {/* Header */}
              <div className="mb-12">
                <h2
                  className={`text-4xl lg:text-5xl font-[700] mb-6 leading-tight md:text-center ${
                    isDark ? "text-white" : "text-primaryText2"
                  }`}
                >
                  {title}
                </h2>
                <p
                  className={`text-lg font-[600] leading-relaxed md:text-center ${
                    isDark
                      ? "text-dark-mode-secondaryText"
                      : "text-secondaryText"
                  }`}
                >
                  {description}
                </p>
              </div>

              {/* Cards List */}
              <RenderCards cardDetails={cardDetails} />

              {/* Image Section - Centered */}
              <div className="flex justify-center md:mt-8">
                <div className="relative overflow-hidden h-[200px] sm:h-[300px]">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className={`${imageClasses} w-full h-full sm:block hidden`}
                  />
                  <img
                    src={mobileImageSrc}
                    alt={imageAlt}
                    className={`${imageClasses} w-full h-full sm:hidden block`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const RenderCards = ({ cardDetails }: { cardDetails: Detail[] }) => {
  // Find cards by their number
  const card1 = cardDetails.find((detail) => detail.number === 1);
  const card2 = cardDetails.find((detail) => detail.number === 2);
  const card3 = cardDetails.find((detail) => detail.number === 3);
  const card4 = cardDetails.find((detail) => detail.number === 4);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:h-[750px] max-w-7xl w-full justify-center">
      {/* First Column - Cards 1 and 3 */}
      <div className="flex flex-col md:w-[62%] gap-6 h-full">
        {/* Card 1 */}
        {card1 && (
          <div className="bg-[#1E1E1E] rounded-lg px-6 py-10 md:p-6 flex flex-col h-[70%]">
            <div className="h-full flex flex-col justify-center">
              <p
                className={`text-white ${
                  card1?.textSize || "text-2xl md:text-3xl"
                } font-[400] leading-tight`}
              >
                {card1.text.split(" ").map((word, i, arr) => {
                  const isHighlighted = card1.highlightWords?.includes(word);
                  return (
                    <React.Fragment key={i}>
                      <span
                        className={
                          isHighlighted ? "text-[#27AAE1] font-[600]" : ""
                        }
                      >
                        {word}
                      </span>
                      {i < arr.length - 1 && " "}
                    </React.Fragment>
                  );
                })}
              </p>
            </div>
          </div>
        )}

        {/* Card 3 */}
        {card3 && (
          <div className="bg-[#1E1E1E] rounded-lg px-6 py-10 md:p-6 hidden md:flex flex-col h-[30%]">
            <div className="h-full flex flex-col justify-center">
              <p
                className={`text-white ${
                  card3?.textSize || "text-lg md:text-xl"
                } font-[400] leading-tight`}
              >
                {card3.text.split(" ").map((word, i, arr) => {
                  const isHighlighted = card3.highlightWords?.includes(word);
                  return (
                    <React.Fragment key={i}>
                      <span className={isHighlighted ? "font-[600]" : ""}>
                        {word}
                      </span>
                      {i < arr.length - 1 && " "}
                    </React.Fragment>
                  );
                })}
              </p>
            </div>
          </div>
        )}

        {card4 && (
          <div className="bg-[#1E1E1E] rounded-lg px-6 py-10 md:p-6 md:hidden flex flex-col h-[60%]">
            <div className="flex justify-center items-center h-full">
              <img
                src={card4.imageSrc}
                alt={card4.imageAlt || "Feature illustration"}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>

      {/* Second Column - Cards 2 and 4 */}
      <div className="flex flex-col gap-6 md:w-[30%] h-full">
        {/* Card 2 */}
        {card2 && (
          <div className="bg-[#1E1E1E] rounded-lg px-6 py-10 md:p-6 flex flex-col h-[40%]">
            <div className="h-full flex flex-col justify-center">
              <p
                className={`text-white w-[80%] ${
                  card2?.textSize || "text-lg md:text-xl"
                } font-[400] leading-tight`}
              >
                {card2.text.split(" ").map((word, i, arr) => {
                  const isHighlighted = card2.highlightWords?.includes(word);
                  return (
                    <React.Fragment key={i}>
                      <span className={isHighlighted ? "font-[600]" : ""}>
                        {word}
                      </span>
                      {i < arr.length - 1 && " "}
                    </React.Fragment>
                  );
                })}
              </p>
            </div>
          </div>
        )}

        {card3 && (
          <div className="bg-[#1E1E1E] rounded-lg px-6 py-10 md:p-6 md:hidden flex flex-col h-[30%]">
            <div className="h-full flex flex-col justify-center">
              <p
                className={`text-white ${
                  card3?.textSize || "text-lg md:text-xl"
                } font-[400] leading-tight`}
              >
                {card3.text.split(" ").map((word, i, arr) => {
                  const isHighlighted = card3.highlightWords?.includes(word);
                  return (
                    <React.Fragment key={i}>
                      <span className={isHighlighted ? "font-[600]" : ""}>
                        {word}
                      </span>
                      {i < arr.length - 1 && " "}
                    </React.Fragment>
                  );
                })}
              </p>
            </div>
          </div>
        )}

        {/* Card 4 - Image Card */}
        {card4 && (
          <div className="bg-[#1E1E1E] rounded-lg px-6 py-10 md:p-6 hidden md:flex flex-col h-[60%]">
            <div className="flex justify-center items-center h-full">
              <img
                src={card4.imageSrc}
                alt={card4.imageAlt || "Feature illustration"}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
