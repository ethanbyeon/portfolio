import { cn } from "@/lib/utils";
import NextLink from "next/link";

export const NavBar = () => {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-50 flex w-full items-center justify-center",
        "border-b boreder-neutral-700/30",
        "transition-transform duration-300 lg:bg-transparent",
        "[background-image:linear-gradient(#000000_1px,transparent_1px),linear-gradient(to_right,#000000_1px,rgba(0,0,0,0.7)_1px)]",
        "[background-position-y:1px] [background-size:2px_2px]",
      )}
    >
      <div className="flex w-full h-9 max-w-3xl items-center justify-between px-6">
        <div className="w-fit leading-tight">
          <h1 className="font-bold text-lg">
            <NextLink href="/">
              <span className="text-primary">Ethan Byeon</span>
            </NextLink>
          </h1>
        </div>

        <div className="flex items-center gap-5 font-mono text-xs uppercase text-neutral-600">
          <a
            href="#about"
            className="transition-colors duration-150 hover:text-neutral-100"
          >
            About
          </a>
          <a
            href="#experience"
            className="transition-colors duration-150 hover:text-neutral-100"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="transition-colors duration-150 hover:text-neutral-100"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};
