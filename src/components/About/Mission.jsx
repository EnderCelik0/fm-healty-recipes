import Image from "../ui/Image";
import ourMissionLg from "/assets/images/image-about-our-mission-large.webp";
import ourMissionSm from "/assets/images/image-about-our-mission-small.webp";

export default function Mission() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 pb-24 md:gap-16 lg:grid-cols-2">
      <div className="space-y-6">
        <p className="text-preset-5 rounded-6 justify-self-start bg-orange-500 px-1.5 py-0.5 text-neutral-900">
          Our mission
        </p>

        <h2 className="text-preset-2 text-neutral-900">
          Help more people cook nourishing meals, more often.
        </h2>

        <div className="space-y-4">
          <p className="text-preset-6 text-neutral-600">
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p className="text-preset-6 text-neutral-600">
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>
      </div>
      <div className="relative">
        <Image
          variants={[
            { src: ourMissionSm, width: 606 },
            { src: ourMissionLg, width: 1068 },
          ]}
          sizes={"100vw"}
          alt="preparing vegetables"
          className="rounded-10"
        />
      </div>
      <img src className="absolute" alt="" />
    </section>
  );
}
