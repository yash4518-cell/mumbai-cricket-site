import { siteData } from "../data/siteData";
import SectionTag from "./SectionTag";

export default function PastStreams() {
  const { streams, brand } = siteData;

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
          {streams.matches.map((match) => (
            <a
              key={match.title}
              href={brand.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="group block bg-pitch-950 text-chalk-50 rounded-sm overflow-hidden border border-pitch-700/60 hover:border-amber-signal/60 transition-colors"
            >
              <div className="relative aspect-video bg-pitch-800 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, transparent, transparent 22px, #f5f3ea 22px, #f5f3ea 23px)",
                  }}
                  aria-hidden="true"
                />
                <span className="relative font-mono text-[0.65rem] tracking-widest uppercase bg-ball-500 text-chalk-50 px-2.5 py-1 absolute top-3 left-3">
                  {match.tag}
                </span>
                <svg
                  className="relative h-12 w-12 text-chalk-50/80 group-hover:text-amber-signal transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="11" fillOpacity="0.15" />
                  <path d="M10 8.5l6 3.5-6 3.5v-7z" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="font-display uppercase text-lg leading-snug">{match.title}</h3>
                <div className="mt-2 font-mono text-xs text-chalk-200/60 tracking-wide">
                  {match.ground} · {match.format} · {match.date}
                </div>
                <p className="mt-3 text-sm text-chalk-200/80">{match.result}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
