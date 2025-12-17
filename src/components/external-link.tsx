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
          "relative inline-block",
          "transition-colors duration-200 ease-in",
          "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-px after:h-px after:block after:pointer-events-none",
          "after:opacity-0 group-hover:after:opacity-100",
          "after:[background-image:repeating-linear-gradient(90deg,currentColor_0_8px,transparent_8px_12px)]",
          "after:[background-size:12px_1px] after:[background-position:0_0]",
          "group-hover:after:[animation:dash-underline_.8s_linear_infinite]",
          "motion-reduce:group-hover:after:[animation:none]",
          underlineClassName,
          textClassName,
        )}
      >
        {children}
      </span>
      <ArrowUpRight
        className={cn(
          "h-4 w-4 m-0.25 text-neutral-400 dark:text-neutral-500",
          "transition-colors duration-200 ease-in",
          iconClassName,
        )}
      />
    </a>
  );
}
