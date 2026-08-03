import { siteData } from "../data/siteData";
import SectionTag from "./SectionTag";

export default function About() {
  const { about } = siteData;

  return (
    <section className="bg-chalk-100 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <SectionTag>{about.eyebrow}</SectionTag>
            <h2 className="font-display uppercase text-3xl sm:text-4xl leading-[1.05] text-ink-900 max-w-md">
              {about.heading}
            </h2>
            <p className="mt-6 text-ink-700 leading-relaxed max-w-md">{about.body}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {about.points.map((point) => (
              <div key={point.title} className="border-l-2 border-ball-500 pl-5">
                <h3 className="font-display uppercase text-lg text-ink-900">
                  {point.title}
                </h3>
                <p className="text-sm text-ink-700 mt-2 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
