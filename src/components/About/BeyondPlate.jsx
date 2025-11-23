import Image from "../common/Image";
import BeyondPlateLg from "/assets/images/image-about-beyond-the-plate-large.webp";
import BeyondPlateSm from "/assets/images/image-about-beyond-the-plate-small.webp";

export default function BeyondPlate() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 py-24 md:gap-16 lg:grid-cols-2">
      <div className="space-y-5 ">
        <h2 className="text-preset-2 text-neutral-900">Beyond the plate </h2>

        <div className="space-y-3">
          <p className="text-preset-6 text-neutral-600">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="text-preset-6 list-disc text-neutral-600 marker:rounded-full marker:text-neutral-900">
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <Image
          variants={[
            { src: BeyondPlateSm, width: 606 },
            { src: BeyondPlateLg, width: 1068 },
          ]}
          sizes={"100vw"}
          alt="happy family dinner"
          className="rounded-10"
        />
      </div>
    </section>
  );
}
