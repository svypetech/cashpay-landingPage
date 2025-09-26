import FeatureCard from "@/src/components/ui/FeatureCard";

export default function DepositFeatures({features}:{features: {icon: string, mobileIcon?: string, title: string, description: string}[]}) {
  

  return (
    <section className="py-16 bg-white w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 ">
          {features.map((feature, index) => (
            <div className="flex justify-center" key={index}>
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="lg:w-[303px] w-full sm:h-[402px] px-5 sm:px-9 py-[40px] sm:py-[60px] rounded-[12px] bg-white max-w-none"
                titleClassName="sm:text-4xl text-2xl mb-6"
                mobileIcon={feature.mobileIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
