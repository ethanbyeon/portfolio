import { ExternalLink } from "@/components/external-link";
import { Contact } from "./contact";
import { Technologies } from "./technologies";

export const About = () => (
  <section
    id="about"
    className="
      space-y-6 pt-22
      scroll-mt-20
      min-h-[100vh]
      flex flex-col justify-center
  "
  >
    {/* Hero */}
    <div className="space-y-3 leading-relaxed">
      <h1 className="text-4xl font-bold text-balance text-primary">
        <span className="text-neutral-400">Hi, I&apos;m Ethan.</span>
        <br />
        Software engineer from Los Angeles,
        <br />
        building cool products that blend engineering, design, & culture.
      </h1>
    </div>

    {/* Body */}
    <div className="space-y-2 leading-relaxed font-medium text-neutral-400 text-balance max-w-xl">
      <p>
        I&apos;m a recent Computer Science graduate from UC Santa Cruz, with a
        focus on web products and data-driven, user-focused experiences.
        Recently, I built{" "}
        <ExternalLink
          href="https://padoh.vercel.app"
          className="hover:text-primary"
        >
          Padoh
        </ExternalLink>
        , a K-pop analytics app, led the frontend for BudgetByte, a
        receipt-to-nutrition insights app, and taught computer science to middle
        and high school students.
      </p>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
      {["Full stack", "Frontend", "Backend", "Engineering", "Design"].map(
        (tag) => (
          <span
            key={tag}
            className="rounded-full capitalize border border-neutral-800 px-3 py-1"
          >
            {tag}
          </span>
        ),
      )}
    </div>

    <Contact />
    <Technologies />
  </section>
);
