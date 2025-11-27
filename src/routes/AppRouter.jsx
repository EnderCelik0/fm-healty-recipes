import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import RecipesPage from "../pages/RecipesPage";
import RecipeDetails from "../components/RecipesPage/RecipeDetails";
import ScrollToTop from "../components/common/ScrollToTop";

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
        {
          path: "/recipes/:recipeId",
          element: <RecipeDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
