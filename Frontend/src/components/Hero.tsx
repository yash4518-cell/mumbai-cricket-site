import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";
import SeamDivider from "./SeamDivider";

export default function Hero() {
  const { hero, brand } = siteData;

  return (
    <section
      id="home"
      className="relative bg-pitch-950 text-chalk-50 pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden"
    >
      {/* Floodlight glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #ffb100 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Pitch stripe texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 58px, #f5f3ea 58px, #f5f3ea 60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ball-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ball-500" />
          </span>
          <span className="font-mono text-xs tracking-[0.3em] text-amber-signal uppercase">
            {hero.eyebrow}
          </span>
          <span className="font-mono text-xs tracking-widest text-chalk-200/50">
            {brand.handle}
          </span>
        </div>

        <h1 className="font-display uppercase text-[13vw] leading-[0.92] sm:text-6xl md:text-7xl lg:text-[5.5rem] whitespace-pre-line max-w-4xl">
          {hero.headline}
        </h1>

        <p className="mt-6 max-w-xl text-chalk-200/80 text-base sm:text-lg leading-relaxed">
          {hero.subhead}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={hero.ctaPrimary.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm tracking-wide uppercase bg-ball-500 hover:bg-ball-400 transition-colors text-chalk-50 px-6 py-3.5 rounded-sm"
          >
            {hero.ctaPrimary.label}
          </a>
          <Link
            to={hero.ctaSecondary.href}
            className="font-mono text-sm tracking-wide uppercase border border-chalk-200/30 hover:border-amber-signal hover:text-amber-signal transition-colors px-6 py-3.5 rounded-sm"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>

        {/* Scoreboard stat strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 border-t border-chalk-200/15">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r last:border-r-0 border-chalk-200/15 py-5 pr-4"
            >
              <div className="font-mono tabular text-3xl sm:text-4xl text-amber-signal">
                {stat.value}
              </div>
              <div className="font-mono text-[0.65rem] tracking-widest text-chalk-200/60 uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-16 text-pitch-700">
        <SeamDivider />
      </div>
    </section>
  );
}
