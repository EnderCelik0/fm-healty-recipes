import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
export default function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col gap-20 bg-neutral-100">
      <Navbar />
      <main className="mx-auto max-w-6xl flex-1 px-4 md:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
