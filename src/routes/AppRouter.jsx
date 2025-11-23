import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "recipes", element: <Recipes /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
