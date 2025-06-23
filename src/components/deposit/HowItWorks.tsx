import React from "react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1.",
      text: "Choose crypto or fiat as your deposit method."
    },
    {
      number: "2.", 
      text: "Generate your unique wallet address for crypto deposits."
    },
    {
      number: "3.",
      text: "Transfer funds securely from your account or other wallets."
    },
    {
      number: "4.",
      text: "Receive a confirmation and see your updated wallet balance."
    }
  ];

  return (
    <section className="py-20 bg-dark-mode-bg max-[450px]:max-h-[1150px] max-[380px]:max-h-[1200px]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - iPhone Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/icons/double-iphone-vertical.svg" 
                  alt="CashPay Mobile App"
                  className="w-[400px] h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] relative max-[550px]:top-[-100px] max-[450px]:w-[350px] max-[450px]:h-[350px] max-[380px]:w-[300px] max-[380px]:h-[300px]"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              {/* Header */}
              <div className="mb-12">
                <h2 className="w-full text-4xl lg:text-5xl font-bold text-white mb-6 font-plus-jakarta leading-tight">
                  How It Works
                </h2>
                <p className="text-lg text-dark-mode-secondaryText font-[400] font-plus-jakarta leading-relaxed max-w-lg">
                  Adding funds to your account is quick and secure. Here's how you can deposit your crypto or fiat
                </p>
              </div>

              {/* Steps List */}
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <span className="text-lg font-bold text-white font-plus-jakarta">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1">
                      <p className="text-base text-dark-mode-secondaryText font-plus-jakarta leading-relaxed">
                        {step.text}
                      </p>
                    </div>
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