import type { ReactNode } from "react";

type SectionTagProps = {
  children: ReactNode;
  light?: boolean;
};

export default function SectionTag({ children, light = false }: SectionTagProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className={`h-2 w-2 rounded-full ${light ? "bg-amber-signal" : "bg-ball-500"} animate-pulse`}
        aria-hidden="true"
      />
      <span
        className={`font-mono text-xs tracking-[0.25em] ${
          light ? "text-chalk-200" : "text-ball-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
