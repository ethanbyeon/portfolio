import { CONTACTS } from "@/data/contacts";
import { ExternalLink } from "@/components/external-link";

export const Footer = () => (
  <footer className="mt-22">
    <div className="flex flex-col justify-between md:flex-row gap-2">
      <div className="flex gap-8">
        {CONTACTS.map((contact) => (
          <ExternalLink
            key={contact.title}
            href={contact.link}
            className="font-semibold text-primary hover:text-neutral-500"
            iconClassName="h-4 w-4"
            underlineClassName="group-hover:decoration-primary"
          >
            {contact.title}
          </ExternalLink>
        ))}
      </div>
      <h2 className="font-semibold text-sm text-neutral-500">
        © 2025 Ethan Byeon
      </h2>
    </div>
    <div className="flex justify-start md:justify-center mt-7">
      <p className="font-mono text-secondary text-xs">03.16.05.07.03.05.04.13</p>
    </div>
  </footer>
);
