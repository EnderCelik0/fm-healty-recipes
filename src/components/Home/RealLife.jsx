import Image from "../ui/Image";
import prepareGreensLarge from "/assets/images/image-home-real-life-large.webp";
import prepareGreensSmall from "/assets/images/image-home-real-life-small.webp";

export default function RealLife() {
  return (
    <section className="grid grid-cols-1 items-center gap-8 py-4 sm:py-20 md:gap-12 lg:grid-cols-2 lg:py-24">
      <div className="space-y-5">
        <h2 className="text-preset-2 text-neutral-900">Built for real life</h2>
        <p className="text-preset-6 text-neutral-600">
          Cooking shouldn’t be complicated. These recipes come in under{" "}
          <span className="text-preset-5 relative z-10">
            30 minutes
            <span className="before:rounded-10 transition-transform duration-200 before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-orange-500"></span>
          </span>{" "}
          of active time, fit busy schedules, and taste good enough to repeat.
        </p>
        <p className="text-preset-6 text-neutral-600">
          Whether you’re new to the kitchen or just need fresh ideas, we’ve got
          you covered.
        </p>
      </div>
      <Image
        variants={[
          { src: prepareGreensSmall, width: 606 },
          { src: prepareGreensLarge, width: 1068 },
        ]}
        sizes={"100vw"}
        alt="preparing green heavy meal"
        className="rounded-10"
      />
    </section>
  );
}
