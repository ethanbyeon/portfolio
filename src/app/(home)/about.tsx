import { ExternalLink } from "@/components/external-link";
import { Contact } from "./contact";
import { Technologies } from "./technologies";

export const About = () => (
  <section
    id="about"
    className="
      space-y-12 pt-22
      scroll-mt-20
      min-h-[100vh]
      flex flex-col justify-center
  "
  >
    <div className="space-y-6">
      {/* Hero */}
      <div className="space-y-3 leading-relaxed">
        <h1 className="text-4xl font-bold text-balance text-neutral-500 dark:text-primary">
          <span className="text-primary dark:text-neutral-400">
            Hi, I&apos;m Ethan.
          </span>
          <br />
          Software engineer from Los Angeles,
          <br />
          building cool products that blend engineering, design, & culture.
        </h1>
      </div>

      {/* Body */}
      <div className="space-y-2 leading-relaxed font-medium text-neutral-500 dark:text-neutral-400 text-balance max-w-xl">
        <p>
          I&apos;m a recent Computer Science graduate from UC Santa Cruz focused
          on building user-facing products, from data to UI. Recently, I built{" "}
          <ExternalLink
            href="https://padoh.vercel.app"
            className="hover:text-primary"
          >
            Padoh
          </ExternalLink>
          , led the frontend for BudgetByte, and taught computer science to
          middle and high school students.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400">
        {["Full stack", "Frontend", "Backend", "Engineering", "Design"].map(
          (tag) => (
            <span
              key={tag}
              className="rounded-full capitalize border dark:border-neutral-800 px-3 py-1"
            >
              {tag}
            </span>
          ),
        )}
      </div>
    </div>

    <Contact />
    <Technologies />
  </section>
);
