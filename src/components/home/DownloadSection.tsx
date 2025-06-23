import Image from "next/image";

export default function DownloadSection() {
  return (
    <section className="relative bg-dark-mode-bg py-25  lg:max-h-[300px]  lg:min-h-[670px] min-h-[700px]  overflow-hidden">
      {/* Background Ellipses */}
      <div className="absolute bottom-[-90px]">
        <Image
          src="/icons/bottom-ellipse.svg"
          alt=""
          width={400}
          height={400}
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
        />
      </div>
      <div className="absolute top-[-80px] right-0">
        <Image
          src="/icons/top-ellipse.svg"
          alt=""
          width={400}
          height={400}
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
        />
      </div>
      <div className="absolute lg:bottom-[-150px] bottom-[-100px] right-0 ">
        <img
          src="/icons/double-iphone.svg"
          alt="CashPay Mobile App"
          className="lg:max-w-[1153px] lg:max-h-[863px] max-w-[1000px] max-h-[600px] w-full h-auto"
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="items-center gap-12 lg:gap-16 ">
            {/* Left Content */}
            <div className="text-left lg:max-w-xl xl:max-w-5xl">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-plus-jakarta leading-tight">
                Ready to Elevate Your
                <span className="text-dark-mode-secondary"> Crypto Experience?</span>
              </h2>

              <p className="text-lg lg:text-xl text-gray-300 mb-8 font-plus-jakarta max-w-lg">
                Join thousands who trust CashPay for their digital asset
                management.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4  ml-[-10px]">
                {/* Google Play Button */}
                <a href="#" className="inline-block">
                  <Image
                    src="/icons/PlayStore.svg"
                    alt="Get it on Google Play"
                    width={104}
                    height={96}
                    className="w-[150px] sm:w-[204px] h-auto hover:opacity-80 transition-opacity duration-200"
                  />
                </a>

                {/* App Store Button */}
                <a href="#" className="inline-block">
                  <Image
                    src="/icons/AppStore.svg"
                    alt="Available on the App Store"
                    width={204}
                    height={96}
                    className="w-[150px] sm:w-[204px] h-auto hover:opacity-80 transition-opacity duration-200"
                  />
                </a>
              </div>

              {/* iPhone below buttons - visible only below lg */}
            </div>

            {/* Right iPhone Mockup */}
          </div>
        </div>
      </div>
    </section>
  );
}
