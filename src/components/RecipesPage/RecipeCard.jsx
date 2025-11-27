import Image from "../ui/Image";
import Button from "../ui/Button";
import RecipePrepInfo from "../common/RecipePrepInfo";
import { Link } from "react-router";

export default function RecipeCard({
  img = {},
  title,
  overview,
  cookMinutes,
  prepMinutes,
  servings,
  slug,
}) {
  return (
    <section className="bg-neutral-0 rounded-10 flex cursor-pointer flex-col justify-between gap-4 p-2">
      <Image
        sizes="100vw"
        alt={`${title} preview image`}
        className="rounded-10 max-h-[300px] object-cover lg:max-h-[450px]"
        variants={img}
      />
      <h5 className="text-preset-5 overflow-hidden text-ellipsis whitespace-nowrap text-neutral-900">
        {title}
      </h5>
      <p className="text-preset-9 text-neutral-600">{overview}</p>
      <RecipePrepInfo
        cookMinutes={cookMinutes}
        prepMinutes={prepMinutes}
        servings={servings}
      />
      <Link viewTransition to={`/recipes/${slug}`} className="w-full">
        <Button className="w-full rounded-full">View Recipe</Button>
      </Link>
    </section>
  );
}
