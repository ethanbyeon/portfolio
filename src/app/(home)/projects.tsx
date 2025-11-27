import { ExternalLink } from "@/components/external-link";
import { PROJECTS } from "@/data/projects";

export const Projects = () => (
  <section>
    <h2 id="projects" className="mb-2 font-bold text-xl text-neutral-500">
      Projects
    </h2>

    <ul className="divide-y divide-neutral-800">
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
              group mt-2
              grid grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)]
              items-center
              gap-x-4 gap-y-1 py-3
            "
          >
            <div className="col-span-1 flex items-center space-x-1">
              <h3 className="font-semibold text-primary">
                {exp.link ? (
                  <ExternalLink
                    key={exp.title}
                    href={exp.link}
                    className="inline-flex items-center gap-1"
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
                  text-sm text-balance text-neutral-600 group-hover:text-neutral-400
                  line-clamp-2
                "
              >
                {exp.summary}
              </p>
            </div>

            <div className="col-span-3 mt-4">
              <div
                className="
                  grid grid-cols-1 sm:grid-cols-5
                  gap-y-0.5 gap-x-1
                  text-xs text-neutral-700
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
