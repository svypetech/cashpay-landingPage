import IPhoneDisplay from "@/src/components/ui/iPhoneDisplay";

export default function iPhoneSection() {
  return (
    <section className="bg-white relative ">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-8xl mx-auto flex justify-center">
          <IPhoneDisplay className="mx-auto" />
        </div>
      </div>
    </section>
  );
}