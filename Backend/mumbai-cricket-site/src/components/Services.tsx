import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";
import SectionTag from "./SectionTag";

export default function Services() {
  const { services } = siteData;

  return (
    <section id="services" className="bg-chalk-50 text-ink-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-lg mb-12">
          <SectionTag light>{services.eyebrow}</SectionTag>
          <h2 className="font-display uppercase text-3xl sm:text-4xl leading-[1.05]">
            {services.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm p-7 flex flex-col border ${
                plan.featured ? "border-ball-600 bg-chalk-100 shadow-sm" : "border-chalk-200/30 bg-chalk-100"
              }`}
            >
              {plan.featured && (
                <span className="font-mono text-[0.65rem] tracking-widest uppercase bg-ball-500 text-chalk-50 px-2.5 py-1 self-start mb-4">
                  Most booked
                </span>
              )}
              <h3 className="font-display uppercase text-2xl text-ink-900">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-mono text-3xl tabular text-ink-900">{plan.price}</span>
                {plan.unit && (
                  <span className="font-mono text-xs text-ink-700">{plan.unit}</span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{plan.description}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-900">
                    <svg
                      className="h-4 w-4 mt-0.5 shrink-0 text-ball-600"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-7 font-mono text-xs tracking-widest uppercase text-center px-5 py-3 rounded-sm transition-colors ${
                  plan.featured
                    ? "bg-ball-600 text-chalk-50 hover:bg-ball-500"
                    : "border border-ink-200 text-ink-900 hover:border-ball-600 hover:text-ball-600"
                }`}
              >
                Enquire
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
