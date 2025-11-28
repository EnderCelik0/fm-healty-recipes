import { Link, NavLink } from "react-router";
import Button from "../ui/Button";
import hamburgerMenu from "/assets/images/icon-hamburger-menu.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }
  const links = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "About",
      to: "/about",
    },
    {
      id: 3,
      name: "Recipes",
      to: "/recipes",
    },
  ];

  return (
    <nav>
      <div className="bottom-b bottom-b-1 relative flex items-center justify-between border border-neutral-300 px-8 py-8 pb-5 lg:px-15 lg:py-5">
        <NavLink to="/" className="shrink-0" viewTransition>
          <img src="/assets/images/logo.svg" alt="brand-website-logo" />
        </NavLink>
        <ul className="hidden gap-10 md:flex">
          {links.map(({ id, name, to }) => (
            <li key={id} className="relative">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  // create orange underline if nav link is active
                  isActive
                    ? "before:rounded-10 before:animate-scale duration-200 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-full before:bg-orange-500 before:transition-all"
                    : ""
                }
                viewTransition
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/recipes" viewTransition className="hidden md:block">
          <Button>Browse Recipes</Button>
        </NavLink>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="rounded-4 block shrink-0 cursor-pointer bg-neutral-200 p-2 text-neutral-900 transition-colors duration-200 hover:bg-neutral-300 md:hidden"
        >
          <img
            src={hamburgerMenu}
            alt="mobile menu button w-10 aspect-square"
          />
        </button>
      </div>
      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div className="rounded-8 animate-fadeIn bg-neutral-0 absolute top-20 left-8 z-20 w-[calc(100%-4rem)] flex-col gap-4 border border-neutral-200 p-2 md:hidden">
          <ul className="flex w-full flex-col gap-4">
            {links.map((link) => (
              <NavLink
                viewTransition
                to={link.to}
                key={link.id}
                className="text-preset-7"
              >
                {link.name}
              </NavLink>
            ))}
            <li className="w-full">
              <NavLink viewTransition to="/recipes">
                <Button>Browse Recipes</Button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
