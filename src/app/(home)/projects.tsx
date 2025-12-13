import { ExternalLink } from "@/components/external-link";
import { PROJECTS } from "@/data/projects";

export const Projects = () => (
  <section id="projects" className="scroll-mt-20">
    <h2 className="mb-2 font-bold text-xl uppercase dark:text-neutral-500">Projects</h2>

    <ul>
      {PROJECTS.map((exp) => {
        const techList = Array.isArray(exp.tech)
          ? exp.tech
          : exp.tech
            ? [exp.tech]
            : [];

        return (
          <li
            key={exp.title}
            className="
              group relative mt-2
              grid grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)]
              items-center
              gap-x-4 gap-y-1 py-3

              border-b dark:border-neutral-800
              transition-all duration-500

              before:content-['']
              before:absolute before:left-0 before:bottom-[-1px]
              before:h-px before:w-full
              before:bg-foreground
              before:opacity-0
              before:transition-opacity before:duration-500
              hover:before:opacity-100

              after:content-['']
              after:pointer-events-none
              after:absolute after:left-0 after:bottom-0
              after:h-px after:w-full
              after:bg-foreground
              after:origin-center
              after:scale-x-0
              after:transition-transform after:duration-300 after:ease-in-out
              hover:after:scale-x-100
            "
          >
            <div className="col-span-1 flex items-center space-x-1">
              <h3 className="font-semibold text-primary">
                {exp.link ? (
                  <ExternalLink
                    key={exp.title}
                    href={exp.link}
                    className="inline-flex gap-1"
                    iconClassName="h-4 w-4"
                    underlineClassName="group-hover:decoration-primary"
                  >
                    {exp.title}{" "}
                  </ExternalLink>
                ) : (
                  exp.title
                )}
              </h3>
            </div>

            <p
              className="
                col-span-1 self-center
                text-sm font-medium text-neutral-500
                truncate
              "
            >
              {exp.madeAt}
            </p>

            <p className="col-span-1 self-center text-right text-xs font-mono uppercase text-neutral-500">
              {exp.date}
            </p>

            <div className="col-span-3 space-y-1">
              <p
                className="
                  text-sm text-balance line-clamp-2
                  text-neutral-500
                "
              >
                {exp.summary}
              </p>
            </div>

            <div className="col-span-3 mt-4">
              <div
                className="
                  grid grid-cols-3 sm:grid-cols-5
                  gap-y-0.5 gap-x-1
                  text-xs text-neutral-500 dark:text-neutral-500
                "
              >
                {techList.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);
