import React from "react";

interface TimelineStep {
  number: string;
  title: string;
  points: string[];
}

export default function VerticalTimeline() {
  const steps: TimelineStep[] = [
    {
      number: "1",
      title: "Download and Register",
      points: [
        "Get the CashPay app from the App Store or Google Play.",
        "Create an account with just a few clicks.",
      ],
    },
    {
      number: "2",
      title: "Secure Your Wallet",
      points: [
        "Set up your personal wallet with multi-currency support.",
        "Enable security features like 2FA for added protection.",
      ],
    },
    {
      number: "3",
      title: "Start Trading",
      points: [
        "Explore market rates and trade crypto effortlessly.",
        "Send or receive crypto instantly through wallet addresses.",
      ],
    },
    {
      number: "4",
      title: "Monitor Your Portfolio",
      points: [
        "Keep track of your gains and losses.",
        "Set real-time alerts and manage your assets.",
      ],
    },
    {
      number: "5",
      title: "Earn Rewards",
      points: [
        "Access advanced tools to list, buy, or sell crypto.",
        "Manage your dashboard for a professional trading experience.",
      ],
    },
  ];

  // Keep your existing steps array

  return (
    <section className="py-20 pb-[200px] lg:pb-[200px] bg-white">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-pure-gray">
              Getting Started with CashPay{" "}
            </h2>
            <p className="max-w-2xl mx-auto md:text-lg text-base text-secondaryText font-[600]">
              It’s simple, fast, and secure. Follow these steps to begin your
              journey.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline line running through everything */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-[3.5px] bg-blue-200 z-0 h-[98%] top-[100px] md:h-[90%] md:top-[300px]"
              style={{
                background:
                  "linear-gradient(to bottom, #FFFFFF, #D4DCEC, #C2D0ED, #809DD7, #163C89)",
              }}
            ></div>

            {/* iPhone as first timeline element */}
            <div className="flex justify-center mb-16 relative z-10">
              <img
                src="/icons/iPhones/timeline-iPhone.svg"
                alt="CashPay App Interface"
                className="h-[90%] w-[90%] z-20 relative hidden md:block"
              />
              <img
                src="/icons/iPhones/timeline-iPhone-mobile.svg"
                alt="CashPay App Interface"
                className="h-[100%] w-[100%] z-20 relative block md:hidden "
              />
            </div>

            {/* Timeline steps */}
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start relative py-8 md:py-0 mb-10 md:mb-0"
                >
                  {/* Left side (even on desktop) */}
                  <div
                    className={`hidden md:block w-1/2  ${
                      isEven ? "pr-16" : "opacity-0"
                    }`}
                  >
                    {isEven && (
                      <div
                        className="bg-white pl-10 pr-3 py-12 rounded-[16px] ml-auto max-w-[350px] relative top-[-50px]"
                        style={{
                          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)",
                          filter: "blur(0px)",
                          minHeight: "220px",
                        }}
                      >
                        <div className="bg-[#2156C11A] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                          <span className="text-[#2156C1] poppins font-[700] text-2xl">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-2xl font-[600] mb-3 poppins">
                          {step.title}
                        </h3>
                        <ul className="list-disc marker:text-xs  pl-5 space-y-2 max-w-[280px]">
                          {step.points.map((point, i) => (
                            <li
                              key={i}
                              className="poppins font-[300] text-[15px]"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#2156C1] rounded-full border-4 border-white z-20 md:top-0 top-[-1px]  ${
                      step.number === "1" ? "" : "md:top-[-50px]"
                    }`}
                  ></div>

                  {/* Right side (odd on desktop) */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      !isEven ? "pl-16" : "opacity-0"
                    }`}
                  >
                    {!isEven && (
                      <div
                        className="bg-white pl-10 pr-3 py-12 rounded-[16px] max-w-[350px] relative top-[-50px] "
                        style={{
                          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)",
                          filter: "blur(0px)",
                          minHeight: "220px",
                        }}
                      >
                        <div className="bg-[#2156C11A] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                          <span className="text-[#2156C1] poppins font-[700] text-2xl">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-2xl font-[600] mb-3 poppins">
                          {step.title}
                        </h3>
                        <ul className="list-disc marker:text-xs pl-5 space-y-2">
                          {step.points.map((point, i) => (
                            <li
                              key={i}
                              className="poppins font-[300] text-[15px]"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Mobile version - card below dot */}
                  <div className="md:hidden w-full mt-8 px-4">
                    <div
                      className="bg-white p-6 rounded-[16px] shadow-md mx-auto max-w-md"
                      style={{ minHeight: "180px" }}
                    >
                      <div className="bg-[#2156C11A] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <span className="text-[#2156C1] poppins font-[700] text-xl">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-[600] mb-3 poppins">
                        {step.title}
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {step.points.map((point, i) => (
                          <li
                            key={i}
                            className="poppins font-[300] text-[15px] text-gray-700"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
