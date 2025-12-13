import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-50 flex w-full items-center justify-center",
        "transition-transform duration-300 lg:bg-transparent",
        "[background-image:linear-gradient(#FFFFFF_1px,transparent_1px),linear-gradient(to_right,#FFFFFF_1px,rgba(255,255,255,0.7)_1px)]",
        "dark:[background-image:linear-gradient(#000000_1px,transparent_1px),linear-gradient(to_right,#000000_1px,rgba(0,0,0,0.7)_1px)]",
        "[background-position-y:1px] [background-size:2px_2px]",
        "after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:bg-neutral-700/10 dark:after:bg-neutral-300/10",
      )}
    >
      <div className="flex h-9 w-full max-w-3xl items-center justify-between px-6 min-w-0">
        <div className="shrink-0 whitespace-nowrap leading-tight mr-2">
          <h1 className="text-lg font-bold">
            <NextLink href="/">
              <span className="text-primary uppercase">Ethan Byeon</span>
            </NextLink>
          </h1>
        </div>

        <div className="flex items-center gap-3 min-w-0 ml-2">
          <div
            className={cn(
              "min-w-0 flex-1 overflow-x-auto whitespace-nowrap",
              "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            )}
          >
            <div className="flex items-center gap-5 font-mono text-xs uppercase text-neutral-400 dark:text-neutral-600 pr-2">
              <a
                href="#about"
                className="shrink-0 transition-colors duration-150 hover:text-primary"
              >
                About
              </a>
              <a
                href="#experience"
                className="shrink-0 transition-colors duration-150 hover:text-primary"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="shrink-0 transition-colors duration-150 hover:text-primary"
              >
                Projects
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
