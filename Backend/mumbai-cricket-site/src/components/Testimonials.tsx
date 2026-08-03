import { siteData } from "../data/siteData";
import SectionTag from "./SectionTag";

export default function Testimonials() {
  const { testimonials } = siteData;

  return (
    <section className="bg-chalk-100 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTag>{testimonials.eyebrow}</SectionTag>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {testimonials.quotes.map((t) => (
            <figure
              key={t.name}
              className="bg-chalk-100 border border-chalk-200/30 rounded-sm p-7 flex flex-col"
            >
              <blockquote className="text-ink-900 leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink-900/10">
                <div className="font-display uppercase text-sm text-ink-900">{t.name}</div>
                <div className="font-mono text-xs text-ink-700/60 mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
