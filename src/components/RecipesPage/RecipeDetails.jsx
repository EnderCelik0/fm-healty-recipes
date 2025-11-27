import bulletPoint from "/assets/images/icon-bullet-point.svg";
import { Link, useParams } from "react-router";
import recipes from "../../../recipes.json";
import Image from "../ui/Image.jsx";
import RecipePrepInfo from "../common/RecipePrepInfo.jsx";
import List from "../common/List.jsx";
import RecipeCard from "../RecipesPage/RecipeCard.jsx";

export default function RecipeDetails() {
  const { recipeId } = useParams();

  const recipe = recipes.find((recipe) => recipe.slug === recipeId);

  return (
    <div>
      <span className="text-preset-7 text-neutral-900">
        <Link to="/recipes" className="text-neutral-900/60" viewTransition>
          Recipes /
        </Link>{" "}
        {recipe.title}
      </span>
      <RecipeDetail />
      <div className="my-14 h-px w-full bg-neutral-200"></div>

      <MoreRecipes />
    </div>
  );
}

function RecipeDetail() {
  const { recipeId } = useParams();

  const recipe = recipes.find((recipe) => recipe.slug === recipeId);

  return (
    <section className="flex flex-col items-start gap-10 lg:flex-row">
      <Image
        variants={[
          { src: recipe.image.large, width: 768 },
          { src: recipe.image.small, width: 343 },
        ]}
        sizes="100vw"
        className="rounded-16 aspect-square max-h-[700px]"
      />

      <div className="flex flex-col gap-5">
        <h3 className="text-preset-3 text-neutral-900">{recipe.title}</h3>
        <p className="text-preset-6 text-neutral-600">{recipe.overview}</p>
        <RecipePrepInfo
          servings={recipe.servings}
          cookMinutes={recipe.cookMinutes}
          prepMinutes={recipe.prepMinutes}
        />

        <SimpleList
          content={recipe.ingredients}
          listTitle="Ingredients"
          spacing={5}
        />

        <SimpleList
          content={recipe.instructions}
          listTitle="Instructions"
          spacing={5}
        />
      </div>
    </section>
  );
}

function MoreRecipes() {
  const moreRecipes = [recipes[1], recipes[4], recipes[2]];

  return (
    <section>
      <h3 className="text-preset-3 text-neutral-900">More Recipes</h3>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {moreRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.slug}
            title={recipe.title}
            overview={recipe.overview}
            img={[{ src: recipe.image.small, width: 303 }]}
            cookMinutes={recipe.cookMinutes}
            prepMinutes={recipe.prepMinutes}
            servings={recipe.servings}
            slug={recipe.slug}
          />
        ))}
      </div>
    </section>
  );
}

function SimpleList({ content, listTitle, spacing }) {
  const space = `space-y-${spacing}`;

  return (
    <section>
      <h4 className="text-preset-4 mb-4 gap-5 text-neutral-900">
        {listTitle}:
      </h4>
      <ul className={`text-preset-6 ${space} list-disc text-neutral-600`}>
        {content.map((content) => (
          <li key={content} className="flex items-start gap-5">
            <img src={bulletPoint} alt="list bullet point" />
            <p className="text-preset-6 text-neutral-600">{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
