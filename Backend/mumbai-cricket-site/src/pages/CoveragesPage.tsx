import Coverage from "../components/Coverage";
import SectionTag from "../components/SectionTag";
import { siteData } from "../data/siteData";

export default function CoveragesPage() {
  const { brand, coverage } = siteData;

  return (
    <main className="min-h-screen bg-chalk-100">
      <section className="bg-chalk-100 border-b border-chalk-200 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag light>COVERAGES</SectionTag>
          <h1 className="font-display uppercase text-4xl sm:text-5xl leading-tight text-ink-900">
            {coverage.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-ink-700 leading-relaxed">
            {coverage.body}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-ink-500">
            {brand.name}
          </p>
        </div>
      </section>

      <Coverage />
    </main>
  );
}
