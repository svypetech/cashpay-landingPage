import Image from "next/image";

const links = [
  { href: "/about-us", label: "About us" },
  { href: "/how-it-works", label: "How it works?" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/get-app", label: "Get App" },
  { href: "/privacyPolicy", label: "Privacy Policy" },
];
export default function Footer() {
  return (
    <footer className="bg-[#061F51] text-white">
      {/* Main Footer Content */}
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16 ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[50%_25%_15%] gap-8 lg:gap-16 max-w-full">
            {/* Logo and Description */}
            <div className="lg:col-span-1 max-[450px]:mb-8">
              <div className="mb-6">
                <Image
                  src="/icons/full-white-logo.svg"
                  alt="Cashpay"
                  width={250}
                  height={40}
                  className="sm:w-[250px] w-[142px]"
                />
              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Stay in the Loop */}
            <div className="lg:col-span-1 max-[450px]:mb-4">
              <h3 className="text-white font-satoshi font-[700] text-[25px] mb-2">
                Stay in the Loop
              </h3>
              <p className="text-dark-mode-secondaryText font-poppins text-sm font-[400] mb-6 leading-relaxed lg:max-w-[260px]">
                Receive Exclusive Updates Directly to Your Inbox
              </p>

              {/* Email Subscription */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-4 bg-white/5 border-0 rounded-full text-white placeholder-white/70 text-base focus:outline-none pr-16 font-[400] placeholder:text-[#ACB1BF]"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/input-arrow.svg"
                    alt="Submit"
                    width={18}
                    height={18}
                    // className="w-6 h-6"
                  />
                </button>
              </div>
            </div>

            {/* Get App */}
            <div className="lg:col-span-1 lg:items-end">
              <div className="flex-col justify-start w-full white-space-nowrap">
                <h3 className=" text-white font-satoshi font-[700] text-[25px] mb-4 text-left relative left-[5px]">
                  Get App
                </h3>
                <div className="flex flex-row lg:flex-col  relative left-[-5px] ">

                <a href="#" className="block">
                  <Image
                    src="/icons/PlayStore.svg"
                    alt="Get it on Google Play"
                    width={181}
                    height={57}
                    className="w-[130px] sm:w-[171px] hover:opacity-80 transition-opacity"
                  />
                </a>
                <a href="#" className="block">
                  <Image
                    src="/icons/AppStore.svg"
                    alt="Available on the App Store"
                    width={181}
                    height={57}
                    className="w-[130px] sm:w-[171px] hover:opacity-80 transition-opacity"
                  />
                </a>
                </div>
              </div>
            </div>

            {/* App Store Buttons - Smaller size */}
          </div>

          {/* Navigation Links - Above the horizontal line */}
          <div className="mt-12 mb-8">
            <div className="flex max-[450px]:justify-center gap-x-5 gap-y-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Divider and Bottom Section */}
          <div className="pt-8 border-t-[0.8px] border-white">
            <div className="flex flex-row justify-between items-start md:items-center gap-6">
              {/* License Text */}
              <p className="text-white text-[10px] leading-relaxed w-[60%]">
                Licensed & Regulated by [Appropriate Regulatory Authority].
              </p>

              {/* Social Icons */}
              <div className="flex justify-end items-center space-x-4 w-[40%]">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Image
                    src="/icons/twitter.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#1B4284] py-4">
        <div className="w-full px-6 md:px-8 lg:px-12">
          <div className="">
            <p className="text-center text-white/90 text-xs sm:text-sm font-poppins font-[500]">
              Copyright © 2025 Cashpay
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
