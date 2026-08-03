import { useEffect, useState } from "react";
import { siteData } from "../data/siteData";
import SectionTag from "./SectionTag";
import { fetchMatches, type ApiMatch } from "../lib/api";

type DisplayMatch = {
  title: string;
  ground: string;
  format: string;
  date: string;
  result: string;
  tag: string;
};

function fromApi(m: ApiMatch): DisplayMatch {
  return {
    title: m.title,
    ground: m.ground,
    format: m.format,
    date: new Date(m.matchDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" }),
    result: m.result || "",
    tag: m.tag || "MATCH",
  };
}

export default function PastStreams() {
  const { streams, brand } = siteData;

  // Falls back to the placeholder matches in siteData.ts until the backend
  // API is running and reachable, then switches to live data automatically.
  const [matches, setMatches] = useState<DisplayMatch[]>(streams.matches);

  useEffect(() => {
    let cancelled = false;

    fetchMatches()
      .then((apiMatches) => {
        if (!cancelled && apiMatches.length > 0) {
          setMatches(apiMatches.map(fromApi));
        }
      })
      .catch(() => {
        // Backend not reachable — keep showing the placeholder data.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="streams" className="bg-chalk-100 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-lg">
            <SectionTag>{streams.eyebrow}</SectionTag>
            <h2 className="font-display uppercase text-3xl sm:text-4xl leading-[1.05] text-ink-900">
              {streams.heading}
            </h2>
            <p className="mt-5 text-ink-700 leading-relaxed">{streams.body}</p>
          </div>
          <a
            href={brand.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-ball-600 hover:text-ball-500 whitespace-nowrap self-start sm:self-auto"
          >
            View full channel →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <a
              key={match.title + match.date}
              href={brand.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="group block bg-chalk-100 text-ink-900 rounded-sm overflow-hidden border border-chalk-200/30 hover:shadow-md transition-all"
            >
              <div className="relative aspect-video bg-chalk-100 flex items-center justify-center overflow-hidden">
                <span className="relative font-mono text-[0.65rem] tracking-widest uppercase bg-ball-600 text-chalk-50 px-2.5 py-1 absolute top-3 left-3">
                  {match.tag}
                </span>
                <svg
                  className="relative h-12 w-12 text-ball-600 transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="11" fillOpacity="0.15" />
                  <path d="M10 8.5l6 3.5-6 3.5v-7z" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="font-display uppercase text-lg leading-snug text-ink-900">{match.title}</h3>
                <div className="mt-2 font-mono text-xs text-ink-700/70 tracking-wide">
                  {match.ground} · {match.format} · {match.date}
                </div>
                <p className="mt-3 text-sm text-ink-700/80">{match.result}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
