import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export default function CryptoForMerchants() {
  const features: Feature[] = [
    {
      icon: "box.svg",
      title: "Dedicated Dashboard",
      description: "Overview of all Crypto orders and settings",
    },
    {
      icon: "eth.svg",
      title: "Order Management",
      description: "Efficient handling of orders and sell orders",
    },
    {
      icon: "doc.svg",
      title: "Ad Listings",
      description: "Create and manage promotional ads with ease",
    },
    {
      icon: "user.svg",
      title: "Seamless Switching",
      description: "Toggle between personal and merchant accounts effortlessly",
    },
  ];

  return (
    <section className="py-20 bg-dark-mode-bg max-[450px]:max-h-[1150px] max-[380px]:max-h-[1200px]">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Header */}
              <div className="mb-12">
                <h2 className="w-full text-4xl lg:text-5xl font-bold text-white mb-6 font-plus-jakarta leading-tight">
                  How We Make Crypto Easy For Merchants
                </h2>
                <p className="text-lg text-dark-mode-secondaryText font-[600] font-plus-jakarta leading-relaxed">
                  CashPay allows Merchants to Manage orders, create listings,
                  and grow
                  <br />
                  your business-all in one place.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Icon Circle */}
                    <div className="w-14 h-14 bg-dark-mode-accent rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-dark-mode-secondary">
                      <img
                        src={`/icons/${feature.icon}`}
                        alt={feature.title}
                        className="w-6 h-6"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 font-plus-jakarta">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-dark-mode-secondaryText font-plus-jakarta leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Blue Highlight Box */}
            </div>

            {/* Right Side - iPhone Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative   overflow-visible">
                <img
                  src="/icons/iPhones/merchant-iPhone.svg"
                  alt="CashPay Mobile App"
                  className="relative h-full w-full md:block hidden z-1"
                />
                <img
                  src="/icons/iPhones/merchant-iPhone-mobile.svg"
                  alt="CashPay Mobile App"
                  className="relative h-full w-full md:hidden block scale-110 z-1"
                />
                <div className="absolute bottom-[-200px]  md:bottom-[-330px] xl:bottom-[-290px] lg:bottom-[-200px] center-x-1/2 h-full">
                  <img
                    src="/icons/iPhone-ellipse.svg"
                    alt="Ellipse effect"
                    className=" w-full h-[300px] lg:w-[500px] h-auto z-40"
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
