import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "@/data/experience";

export const Experience = () => (
  <section>
    <h2 id="experience" className="mb-4 font-bold text-xl text-neutral-500">
      Experience
    </h2>
    <ul className="space-y-4">
      {EXPERIENCE.map((exp) => (
        <li
          key={exp.company}
          className="
              group
              relative flex flex-col pb-2
              border-b border-neutral-800
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
              <h3 className="font-bold text-primary text-lg">
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex"
                  >
                    <span>{exp.company}</span>
                    <ArrowUpRight
                      className="
                          h-4 w-4 text-neutral-400
                          opacity-0 m-0.5
                          transition-all duration-200 ease-in
                          group-hover:opacity-100
                        "
                    />
                  </a>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="font-mono uppercase text-sm text-neutral-500">
                {exp.start}&thinsp;-&thinsp;{exp.end}
              </p>
            </div>
            <h4 className="font-medium text-neutral-400">{exp.title}</h4>
          </div>
          <p className="text-sm text-neutral-600 group-hover:text-neutral-500">
            {exp.description}
          </p>
        </li>
      ))}
    </ul>
  </section>
);
