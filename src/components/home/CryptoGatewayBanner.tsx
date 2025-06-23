import PromoBanner from "@/src/components/ui/PromoBanner";

export default function CryptoGatewayBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <PromoBanner
            text="Your gateway to a smarter, faster, and more secure crypto experience."
            showLogo={true}
            isFullWidth={false}
          />
        </div>
      </div>
    </section>
  );
}
