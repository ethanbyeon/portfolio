import { EXPERIENCE } from "@/data/experience";
import { ExternalLink } from "@/components/external-link";

export const Experience = () => (
  <section id="experience" className="scroll-mt-20">
    <h2 className="mb-4 font-bold text-xl uppercase dark:text-neutral-500">
      Experience
    </h2>
    <ul>
      {EXPERIENCE.map((exp) => (
        <li
          key={exp.company}
          className="
              group
              relative flex flex-col pt-8 pb-4
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
          <div className="mb-2">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-primary text-lg">
                {exp.link ? (
                  <ExternalLink
                    key={exp.title}
                    href={exp.link}
                    className="inline-flex gap-1"
                    iconClassName="h-4 w-4"
                    underlineClassName="group-hover:decoration-primary"
                  >
                    {exp.company}
                  </ExternalLink>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="font-mono uppercase text-sm text-neutral-500">
                {exp.start}&thinsp;-&thinsp;{exp.end}
              </p>
            </div>
            <h4 className="font-medium text-neutral-500 dark:text-neutral-400">
              {exp.title}
            </h4>
          </div>
          <p className="mt-4 text-sm text-neutral-500">{exp.description}</p>
        </li>
      ))}
    </ul>
  </section>
);
