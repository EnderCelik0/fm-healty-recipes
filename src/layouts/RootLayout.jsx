import { Outlet, useLocation } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-dvh flex-col gap-20 bg-neutral-100">
      <ScrollToTop />
      <Navbar />
      <main className="mx-auto max-w-[1200px] flex-1 px-4 md:px-8 lg:px-0">
        <Outlet />
      </main>
      {location.pathname !== "recipes" && <Footer />}
    </div>
  );
}
