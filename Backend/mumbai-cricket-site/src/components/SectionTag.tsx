import type { ReactNode } from "react";

type SectionTagProps = {
  children: ReactNode;
  light?: boolean;
};

export default function SectionTag({ children, light = false }: SectionTagProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className={`h-2 w-2 rounded-full ${light ? "bg-ball-400" : "bg-ball-500"}`}
        aria-hidden="true"
      />
      <span className="font-mono text-[0.65rem] tracking-[0.35em] text-ink-700 uppercase">
        {children}
      </span>
    </div>
  );
}
