import RecipeCard from "./RecipeCard.jsx";
import recipes from "../../../recipes.json";
import Searchbar from "../ui/Searchbar";
import { useNavigate } from "react-router";
import Select from "../ui/Select.jsx";
import { useState } from "react";

const mapPrepTimeFilters = [
  { id: 1, name: "0 minutes", value: 0 },
  { id: 2, name: "5 minutes", value: 5 },
  { id: 3, name: "10 minutes", value: 10 },
];
const mapCookTimeFilters = [
  { id: 1, name: "0 minutes", value: 0 },
  { id: 2, name: "5 minutes", value: 5 },
  { id: 3, name: "10 minutes", value: 10 },
  { id: 4, name: "15 minutes", value: 15 },
  { id: 5, name: "20 minutes", value: 20 },
];

export default function Recipes() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    searchTerm: "",
    maxPrepTime: 0,
    maxCookTime: 0,
  });

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      filters.searchTerm === ""
        ? true
        : recipe.title.toLowerCase().includes(filters.searchTerm.toLowerCase());

    const matchesPrepTime =
      filters.maxPrepTime === 0 || recipe.prepMinutes <= filters.maxPrepTime;

    const matchesCookTime =
      filters.maxCookTime === 0 || recipe.cookMinutes <= filters.maxCookTime;

    return matchesSearch && matchesPrepTime && matchesCookTime;
  });

  console.log(filteredRecipes);

  return (
    <div className="space-y-6">
      <SearchFilter setFilters={setFilters} filters={filters} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              img={[
                { src: recipe.image.large, width: 1000 },
                { src: recipe.image.small, width: 366 },
              ]}
              title={recipe.title}
              key={recipe.id}
              servings={recipe.servings}
              overview={recipe.overview}
              prepMinutes={recipe.prepMinutes}
              cookMinutes={recipe.cookMinutes}
              slug={recipe.slug}
            />
          ))
        ) : (
          <div className="text-preset-6 text-center">
            No Recipes Found for this filters!
          </div>
        )}
      </div>
    </div>
  );
}

function SearchFilter({ setFilters, filters }) {
  function handleFilters(e, filter) {
    setFilters((prev) => ({
      ...prev,
      [filter]: Number(e.target.value),
    }));
  }

  return (
    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
      <div className="flex w-full flex-col gap-4 sm:flex-row">
        <Select
          options={mapPrepTimeFilters}
          id="maxPrepTime"
          placeholder="Max Prep Time"
          onChange={(e) => handleFilters(e, "maxPrepTime")}
        />
        <Select
          options={mapCookTimeFilters}
          id="maxCookTime"
          placeholder="Max Cook Time"
          onChange={(e) => handleFilters(e, "maxCookTime")}
        />
      </div>
      <Searchbar setFilters={setFilters} filters={filters} />
    </div>
  );
}
