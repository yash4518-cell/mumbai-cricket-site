type SeamDividerProps = {
  className?: string;
};

// A stitched seam line, echoing the cricket ball, used as the site's recurring section divider.
export default function SeamDivider({ className = "" }: SeamDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="w-full h-6"
      >
        <line x1="0" y1="12" x2="1200" y2="12" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
        {Array.from({ length: 40 }).map((_, i) => {
          const x = i * 30 + 8;
          return (
            <path
              key={i}
              d={`M ${x} 6 L ${x + 6} 18`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}
