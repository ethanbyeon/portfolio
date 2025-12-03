import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  underlineClassName?: string;
};

export function ExternalLink({
  href,
  children,
  className,
  textClassName,
  iconClassName,
  underlineClassName,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group inline-flex items-start",
        "underline-offset-4",
        "transition-colors duration-200 ease-in",
        className,
      )}
    >
      <span
        className={cn(
          "transition-colors duration-200 ease-in",
          "group-hover:underline",
          underlineClassName,
          textClassName,
        )}
      >
        {children}
      </span>
      <ArrowUpRight
        className={cn(
          "h-4 w-4 m-0.25 text-neutral-500",
          "transition-colors duration-200 ease-in",
          iconClassName,
        )}
      />
    </a>
  );
}
