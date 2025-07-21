export default function GlobeSection() {
  return (
    <section className="py-15 bg-white w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:text-center">
          <h1 className="text-4xl sm:text-5xl font-[700] text-pure-gray  mb-3 sm:mb-6">
            CashPay Across the Globe
          </h1>
          <p className="text-base sm:text-lg text-secondaryText  mx-auto font-[600]  px-4 sm:px-0">
            Explore the regions where CashPay empowers individuals and
            businesses to embrace the future of payments.
          </p>
        </header>
      </div>
      <div className="mt-10  flex justify-center">
        <img
          src="/images/globe.png"
          alt="Globe showing CashPay's global reach"
          className="w-full h-[40%] rounded-[12px]"
        />
      </div>
    </section>
  );
}
