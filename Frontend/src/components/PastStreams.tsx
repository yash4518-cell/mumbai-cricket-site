import SectionTag from "./SectionTag";

export default function PastStreams() {
  const youtubeLinks = [
    "https://www.youtube.com/live/vlbibqbXt1I?si=h8kQkVtA4uhikIMY",
    "https://www.youtube.com/live/qbH6pTUxvo0?si=oI7IKtp8mTmRStbY",
    "https://www.youtube.com/live/b45yhX2s4-I?si=D2YIY9cCwiAU1l4a",
    "https://www.youtube.com/live/A7IpXJ8LHzE?si=bmUDeJqbLJI3Vqfg",
    "https://www.youtube.com/live/Pr9HndJSTPI?si=GlywEeptoHQhtvkN",
    "https://www.youtube.com/live/JVCzwuIHdo8?si=I4WNPQARuwSXz0Ku"
  ];

  return (
    <section id="streams" className="bg-chalk-100 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-lg">
            <SectionTag>Past Streams</SectionTag>
            <h2 className="font-display uppercase text-3xl sm:text-4xl leading-[1.05] text-ink-900">
              Matches we've called live
            </h2>
            <p className="mt-5 text-ink-700 leading-relaxed">Watch our past live commentary streams.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeLinks.map((link, index) => (
            <a
              key={index}
              href={link}
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
                  Match {index + 1}
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
                <h3 className="font-display uppercase text-lg leading-snug">Watch Match {index + 1}</h3>
                <div className="mt-2 font-mono text-xs text-chalk-200/60 tracking-wide">
                  Click to view on YouTube
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
