import FeatureCard from "@/src/components/ui/FeatureCard";

interface SwapFeature {
  icon: string;
  mobileIcon?: string;
  title: string;
  description: string;
}

export default function Cards({features}: { features: SwapFeature[] }) {
 

  return (
    <section className="py-20 bg-white w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              mobileIcon={feature.mobileIcon}
              description={feature.description}
              className="lg:max-w-full w-full h-[332px] lg:h-[402px] px-9 lg:py-[40px]"
              titleClassName="w-full mb-6 sm:text-4xl text-2xl"
              iconClassName="w-[35px] h-[35px]"
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
