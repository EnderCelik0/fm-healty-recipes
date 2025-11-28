import Button from "../ui/Button";
import knife from "/assets/images/pattern-knife.svg";
import fork from "/assets/images/pattern-fork.svg";
import { Link } from "react-router";

export default function CTACard() {
  return (
    <section className="rounded-16 relative overflow-hidden bg-neutral-200 py-24">
      <div className="flex flex-col items-center justify-center gap-10 text-center text-neutral-800">
        <div className="z-10 space-y-3">
          <h2 className="text-preset-2">Ready to cook smarter?</h2>
          <p className="text-preset-6 text-neutral-600">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
        </div>
        <Link to="/recipes" viewTransition>
          <Button className="z-10 max-w-max">Browse Recipes</Button>
        </Link>
      </div>

      <img
        src={fork}
        alt={fork}
        className="hidden w-[170px] sm:absolute sm:-bottom-4 sm:-left-6 sm:block"
      />
      <img
        src={knife}
        alt={knife}
        className="z-1 hidden sm:absolute sm:-top-5 sm:-right-1 sm:block sm:w-[170px]"
      />
    </section>
  );
}
