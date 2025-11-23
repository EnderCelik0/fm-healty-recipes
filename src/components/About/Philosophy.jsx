import bulletPoint from "/assets/images/icon-bullet-point.svg";

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
        <ul className="text-preset-6 list-disc space-y-12 text-neutral-600">
          {sectionContent.map((content) => (
            <li key={content.id} className="flex items-start gap-5">
              <img src={bulletPoint} alt="list bullet point" />
              <div>
                <h3 className="text-preset-4 text-neutral-900">
                  {content.title}
                </h3>
                <p className="text-preset-6 text-neutral-600">{content.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
