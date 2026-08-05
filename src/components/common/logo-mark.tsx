import { cn } from "@/utils/cn";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-display text-2xl font-bold leading-none text-gradient",
        className,
      )}
    >
      SP.
    </span>
  );
}
