import Image from "next/image";
import Link from "next/link";

export default function GetAppPage() {
  return (
    <section className="relative h-[125vh] sm:h-[100vh] lg:h-[120vh] bg-[#000A1D] px-8 sm:px-12 lg:px-[130px]">
      <div className="overflow-hidden sm:w-[70%] lg:w-[50%] max-h-[300px] md:max-h-[550px] 2xl:max-h-[60%] absolute lg:bottom-0    bottom-0 right-0 z-25">
          <Image
            src="/icons/double-iphone.svg"
            alt="CashPay Mobile App"
            width={200}
            height={203}
            className="w-[100%] h-auto  "
          />
        </div>
      {/* Masked Background Container */}
      <div className="relative h-[125vh] sm:h-[100vh] lg:h-[120vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/home-bg.png"
            alt="Crypto Background"
            fill
            className="object-cover opacity-40 rounded-lg"
            priority
            objectPosition="top"
          />
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
        </div>
        

        <div className="relative flex flex-col h-full">
          <div className="h-[50%] md:h-[40%] lg:h-[45%] flex flex-col justify-end items-center  ">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[700] text-white mb-6 leading-tight text-center">
              Your Crypto Journey Starts Here
            </h1>
            <p className="text-lg sm:text-xl text-white  max-w-3xl mx-auto leading-relaxed text-center font-[400]">
              Download the CashPay app and take control of your finances
              anytime, anywhere.
            </p>
          </div>
          <div className="h-[50%] md:h-[60%] lg:h-[55%] flex flex-col md:flex-row justify-end items-center ">
            <div className="w-full md:w-[57%]  flex flex-col md:flex-row justify-center items-center h-full">
              <Link href="#">
                <Image
                  src="/icons/PlayStore.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="w-[200px] sm:w-[200px] h-auto hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/AppStore.svg"
                  alt="Get it on the App Store"
                  width={180}
                  height={60}
                  className="w-[200px] sm:w-[200px] h-auto hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <div className="w-full md:w-[43%] relative flex justify-end items-end h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
