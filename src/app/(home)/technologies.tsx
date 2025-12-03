import { LANGUAGES } from "@/data/languages";
import { TOOLS } from "@/data/tools";

export const Technologies = () => (
  <section id="technologies">
    <h2 className="mb-2 font-bold text-xl text-neutral-500">Technologies</h2>
    <div
      className="
        grid auto-rows-min
        grid-cols-3
        gap-x-3 gap-y-1
        font-medium
        text-xs text-neutral-400
      "
    >
      {LANGUAGES.map((lang) => (
        <span key={lang} className="">
          {lang}
        </span>
      ))}
      {TOOLS.map((tool) => (
        <span key={tool} className="">
          {tool}
        </span>
      ))}
    </div>
  </section>
);
