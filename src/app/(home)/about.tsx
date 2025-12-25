import { ExternalLink } from "@/components/external-link";
import { CONTACTS } from "@/data/contacts";
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
          Software engineer in Los Angeles.
          <br />
          Building user-facing products that blend engineering, design, &
          culture.
        </h1>
      </div>

      {/* Body */}
      <div className="space-y-2 leading-relaxed font-medium text-neutral-500 dark:text-neutral-400 text-balance max-w-xl">
        <p>
          I&apos;m a recent Computer Science graduate from UC Santa Cruz.
          <br />
          I&apos;ve built{" "}
          <ExternalLink
            href="https://padoh.vercel.app"
            className="hover:text-primary"
          >
            Padoh
          </ExternalLink>
          end to end, led the frontend and design for BudgetByte, and taught
          computer science to middle and high school students.
        </p>
      </div>

      {/* Contacts */}
      <ul className="flex gap-8">
        {CONTACTS.map((contact) => (
          <li key={contact.title}>
            <ExternalLink
              href={contact.link}
              className="font-semibold text-primary hover:text-neutral-500"
              underlineClassName="group-hover:decoration-primary"
            >
              {contact.title}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>

    <Technologies />
  </section>
);
