import List from "../common/List";

const sectionContent = [
  {
    id: 1,
    title: "Whole ingredients first.",
    desc: "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
  },
  {
    id: 2,
    title: "Flavor without compromise.",
    desc: "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
  },
  {
    id: 3,
    title: "Respect for time.",
    desc: "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.",
  },
  {
    id: 4,
    title: "Sustainable choices.",
    desc: "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
  },
];

export default function Philosophy() {
  return (
    <section className="grid grid-cols-1 items-start gap-10 py-24 md:gap-16 lg:grid-cols-2">
      <h2 className="text-preset-2 text-neutral-900">Our food philosophy</h2>
      <div className="space-y-5">
        <List content={sectionContent} />
      </div>
    </section>
  );
}
