import iconMinimumFuss from "/assets/images/icon-minimum-fuss.svg";
import iconSearchInSeconds from "/assets/images/icon-search-in-seconds.svg";
import iconWholeFoodRecipes from "/assets/images/icon-whole-food-recipes.svg";

const features = [
  {
    id: 1,
    icon: iconWholeFoodRecipes,
    title: "Whole-food recipes",
    desc: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    id: 2,
    icon: iconMinimumFuss,
    title: "Minimum fuss",
    desc: "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    id: 3,
    icon: iconSearchInSeconds,
    title: "Search in seconds",
    desc: "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];

export default function Features() {
  return (
    <section className="space-y-12 border-b border-b-neutral-300 py-20 pb-24">
      <h2 className="text-preset-2 text-center">What you'll get</h2>
      <ul className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-0">
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </ul>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <li className="flex flex-col items-start gap-6">
      <img src={icon} alt={`icon-${title}`} />
      <div className="space-y-3">
        <h3 className="text-preset-3 text-neutral-900">{title}</h3>
        <p className="text-preset-6 text-neutral-600">{desc}</p>
      </div>
    </li>
  );
}
