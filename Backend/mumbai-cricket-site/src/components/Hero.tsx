import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";
import SeamDivider from "./SeamDivider";

export default function Hero() {
  const { hero, brand } = siteData;

  return (
    <section
      id="home"
      className="bg-chalk-50 text-ink-900 pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden"
    >

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ball-500" />
          </span>
          <span className="font-mono text-xs tracking-[0.3em] text-ball-600 uppercase">
            {hero.eyebrow}
          </span>
          <span className="font-mono text-xs tracking-widest text-ink-500">
            {brand.handle}
          </span>
        </div>

        <h1 className="font-display uppercase text-[13vw] leading-[0.92] sm:text-6xl md:text-7xl lg:text-[5.5rem] whitespace-pre-line max-w-4xl">
          {hero.headline}
        </h1>

        <p className="mt-6 max-w-xl text-ink-700 text-base sm:text-lg leading-relaxed">
          {hero.subhead}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={hero.ctaPrimary.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm tracking-wide uppercase bg-ball-500 hover:bg-ball-600 transition-colors text-chalk-50 px-6 py-3.5 rounded-sm"
          >
            {hero.ctaPrimary.label}
          </a>
          <Link
            to={hero.ctaSecondary.href}
            className="font-mono text-sm tracking-wide uppercase border border-ink-200 hover:border-ball-500 hover:text-ball-600 transition-colors px-6 py-3.5 rounded-sm"
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
              <div className="font-mono text-[0.65rem] tracking-widest text-ink-500 uppercase mt-1">
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
