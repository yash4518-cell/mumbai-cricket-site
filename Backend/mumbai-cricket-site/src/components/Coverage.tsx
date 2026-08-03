import { siteData } from "../data/siteData";
import SectionTag from "./SectionTag";

export default function Coverage() {
  const { coverage } = siteData;

  return (
    <section id="coverage" className="bg-chalk-50 text-ink-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-lg">
          <SectionTag light>{coverage.eyebrow}</SectionTag>
          <h2 className="font-display uppercase text-3xl sm:text-4xl leading-[1.05]">
            {coverage.heading}
          </h2>
          <p className="mt-5 text-ink-700 leading-relaxed">{coverage.body}</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1 border-t border-ink-200">
          {coverage.grounds.map((ground) => (
            <div
              key={ground}
              className="flex items-center gap-3 py-4 border-b border-ink-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ball-500 shrink-0" aria-hidden="true" />
              <span className="font-body text-ink-900">{ground}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-xs tracking-[0.3em] text-ink-700 uppercase">
          Ground not listed? We'll scout it for your match.
        </p>
      </div>
    </section>
  );
}
