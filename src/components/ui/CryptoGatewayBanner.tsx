import PromoBanner from "@/src/components/ui/PromoBanner";

export default function CryptoGatewayBanner({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex justify-center">{children}</div>
      </div>
    </section>
  );
}
