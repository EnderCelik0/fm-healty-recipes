import Image from "../common/Image";
import Button from "../ui/Button";
import servingsIcon from "/assets/images/icon-servings.svg";
import prepIcon from "/assets/images/icon-prep-time.svg";
import cookIcon from "/assets/images/icon-cook-time.svg";

export default function RecipePreviewCard({
  img = {},
  title,
  overview,
  cookMinutes,
  prepMinutes,
  servings,
  ...props
}) {
  return (
    <section className="bg-neutral-0 rounded-10 flex flex-col gap-4 p-2">
      <Image
        sizes="100vw"
        alt={`${title} preview image`}
        className="rounded-10"
        variants={""}
      />
      <h5 className="text-preset-5 text-neutral-900">{title}</h5>
      <p className="text-preset-9 text-neutral-600">{overview}</p>
      <ul className="flex flex-wrap gap-4">
        <li className="flex items-center gap-1.5">
          <img src={servingsIcon} alt="" />
          Servings: {servings}
        </li>
        <li className="flex items-center gap-1.5">
          <img src={prepIcon} alt="prepare time icon" />
          Prep: {prepMinutes}
        </li>
        <li className="flex items-center gap-1.5">
          <img src={cookIcon} alt="cooking time icon" />
          Cook: {cookMinutes}
        </li>
      </ul>
      <Button className="rounded-full">View Recipe</Button>
    </section>
  );
}
