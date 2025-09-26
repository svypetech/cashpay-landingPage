import React from "react";

interface Step {
  number: number;
  title: string;
  description: string;
}

export default function HowCashPayWorks() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Download & Register",
      description: "Get the CashPay app and set up your account",
    },
    {
      number: 2,
      title: "Secure Your Wallet",
      description: "Configure your multi-currency wallet",
    },
    {
      number: 3,
      title: "Start Trading",
      description: "Buy, sell, or exchange cryptocurrencies.",
    },
    {
      number: 4,
      title: "Monitor Portfolio",
      description: "Track your assets and market trends in real-time.",
    },
    {
      number: 5,
      title: "Upgrade to Merchant",
      description: "Verify your bank account to access merchant features",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center lg:mb-16 mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-plus-jakarta">
              How CashPay Works
            </h2>
            <p className="text-lg text-light-mode-secondaryText font-[600] max-w-3xl mx-auto font-plus-jakarta">
              Simple steps to start your crypto journey—sign up, manage your
              wallet, and trade effortlessly.
            </p>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-start">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center relative"
                  style={{ width: "20%" }}
                >
                  {/* Step Circle */}
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8 relative z-10">
                    <span className="text-2xl font-bold text-black font-plus-jakarta ">
                      {step.number}
                    </span>
                  </div>

                  {/* Dashed line to next step */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute top-8 h-[2px] z-0"
                      style={{
                        left: "calc(65%)",
                        right: "calc(-100% + 40%)",
                        backgroundImage: `
                          linear-gradient(to right, 
                            #27AAE1 0%, #27AAE1 8px, transparent 8px, transparent 16px,
                            #27AAE1 16px, #27AAE1 28px, transparent 28px, transparent 36px,
                            #27AAE1 36px, #27AAE1 48px, transparent 48px, transparent 56px,
                            #27AAE1 56px, #27AAE1 68px, transparent 68px, transparent 76px,
                            #27AAE1 76px, #27AAE1 88px, transparent 88px, transparent 96px,
                            #27AAE1 96px, #27AAE1 108px, transparent 108px, transparent 116px,
                            #27AAE1 116px, #27AAE1 128px, transparent 128px, transparent 136px,
                            #27AAE1 136px, #27AAE1 148px, transparent 148px, transparent 156px,
                            #27AAE1 156px, #27AAE1 168px, transparent 168px, transparent 176px,
                            #27AAE1 176px, #27AAE1 188px, transparent 188px, transparent 196px,
                            #27AAE1 196px, #27AAE1 208px, transparent 208px, transparent 216px,
                            #27AAE1 216px, #27AAE1 224px, transparent 224px, transparent 232px
                          )
                        `,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  )}

                  {/* Step Content - Directly below circle */}
                  <div className="w-full flex flex-col items-center">
                    <h3 className="text-xl font-bold text-light-mode-primary mb-3 font-plus-jakarta">
                      {step.title}
                    </h3>
                    <p className="text-gray font-[400] text-sm leading-relaxed font-plus-jakarta w-[160px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout - Vertical */}
          <div className="lg:hidden">
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col items-center">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex flex-col items-center text-center relative">
                    {/* Step Circle */}
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center relative z-10 mb-6">
                      <span className="text-xl font-bold text-black font-plus-jakarta">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Content - Below circle */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-light-mode-primary mb-3 font-plus-jakarta">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-plus-jakarta max-w-[200px]">
                        {step.description}
                      </p>
                    </div>

                    {/* Vertical dashed line - Original styling */}
                    {index < steps.length - 1 && (
                      <div
                        className="w-[2px] h-16 mb-4"
                        style={{
                          backgroundImage: `
                            linear-gradient(to bottom, 
                              #27AAE1 0%, #27AAE1 8px, transparent 8px, transparent 16px,
                              #27AAE1 16px, #27AAE1 28px, transparent 28px, transparent 36px,
                              #27AAE1 36px, #27AAE1 48px, transparent 48px, transparent 56px,
                              #27AAE1 56px, #27AAE1 68px, transparent 68px, transparent 76px,
                              #27AAE1 76px, #27AAE1 88px, transparent 88px, transparent 96px,
                              #27AAE1 96px, #27AAE1 108px, transparent 108px, transparent 116px,
                              #27AAE1 116px, #27AAE1 128px, transparent 128px, transparent 136px,
                              #27AAE1 136px, #27AAE1 148px, transparent 148px, transparent 156px,
                              #27AAE1 156px, #27AAE1 168px, transparent 168px, transparent 176px,
                              #27AAE1 176px, #27AAE1 188px, transparent 188px, transparent 196px,
                              #27AAE1 196px, #27AAE1 208px, transparent 208px, transparent 216px,
                              #27AAE1 216px, #27AAE1 224px, transparent 224px, transparent 232px
                            )
                          `,
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    )}
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
