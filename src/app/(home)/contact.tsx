import { CONTACTS } from "@/data/contacts";
import { ExternalLink } from "@/components/external-link";

export const Contact = () => (
  <section>
    <h2 id="contact" className="mb-2 font-bold text-xl text-neutral-500">
      Contact
    </h2>
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
  </section>
);
