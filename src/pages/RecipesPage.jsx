import { Outlet } from "react-router";
import Hero from "../components/RecipesPage/Hero";
import Recipes from "../components/RecipesPage/Recipes";

export default function RecipesPage() {
  return (
    <div className="pb-24 px-4">
      <Hero />
      <Recipes />
    </div>
  );
}
