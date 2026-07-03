import { cn } from "@/utils/cn";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 bg-primary text-white shadow-glow",
        className,
      )}
    >
      <span className="font-display text-lg font-bold">SP</span>
    </div>
  );
}
