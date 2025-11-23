import Image from "../common/Image";
import Button from "../ui/Button";
import heroImageLg from "/assets/images/image-home-hero-large.webp";
import heroImageSm from "/assets/images/image-home-hero-small.webp";

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 pt-0 pb-0 md:pt-12 lg:gap-20 lg:px-0 lg:pt-0 lg:pb-24">
      <div className="flex flex-col items-start justify-start gap-10 lg:items-center lg:justify-center lg:text-center">
        <div>
          <h1 className="text-preset-1-tablet lg:text-preset-1 mb-3 text-neutral-900">
            <span className="relative z-10">
              Healty
              <span className="before:rounded-4 transition-transform duration-200 before:absolute before:bottom-2 before:left-0 before:-z-1 before:h-10 before:w-[105%] before:bg-orange-500/40"></span>
            </span>{" "}
            meals, zero fuss
          </h1>
          <p className="text-preset-6 w-full text-neutral-600 lg:max-w-xl">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
        </div>
        <Button>Start Exploring</Button>
      </div>
      <div className="rounded-12 border-neutral-0 bg-neutral-0 border-10">
        <Image
          variants={[
            { src: heroImageSm, width: 606 },
            { src: heroImageLg, width: 1068 },
          ]}
          sizes="100vw"
          alt="woman preparing a healthy meal"
          priority={true}
          className="rounded-10"
        />
      </div>
    </section>
  );
}
