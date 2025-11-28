import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import RecipesPage from "../pages/RecipesPage";
import RecipeDetails from "../components/RecipesPage/RecipeDetails";
import Recipes from "../components/RecipesPage/Recipes";
import RecipesLayout from "../layouts/RecipesLayout";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "recipes",
          element: <RecipesPage />,
        },
      ],
    },
    {
      path: "/recipes",
      element: <RecipesLayout />,
      children: [
        { index: true, element: <Recipes /> },
        { path: "/recipes/:recipeId", element: <RecipeDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
