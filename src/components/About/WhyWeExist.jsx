import List from "../common/List";
import bulletPoint from "/assets/images/icon-bullet-point.svg";

const sectionContent = [
  {
    id: 1,
    title: "Cut through the noise.",
    desc: "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.",
  },
  {
    id: 2,
    title: "Empower home kitchens.",
    desc: "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
  },
  {
    id: 3,
    title: "Make healthy look good.",
    desc: "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.",
  },
];

export default function WhyWeExist() {
  return (
    <section className="grid grid-cols-1 items-start gap-10 py-24 md:gap-16 lg:grid-cols-2">
      <h2 className="text-preset-2 text-neutral-900">Why we exist</h2>
      <div className="space-y-5">
        <List content={sectionContent} />
      </div>
    </section>
  );
}
