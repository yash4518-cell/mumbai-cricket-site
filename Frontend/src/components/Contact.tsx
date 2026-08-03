import { useState, type FormEvent } from "react";
import { siteData } from "../data/siteData";
import SectionTag from "./SectionTag";

export default function Contact() {
  const { contactSection, contact } = siteData;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Frontend-only demo: no backend is wired up yet.
    // Replace this with a real submit (e.g. POST to an API route or a form service) when one is connected.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-pitch-950 text-chalk-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionTag light>{contactSection.eyebrow}</SectionTag>
            <h2 className="font-display uppercase text-3xl sm:text-4xl leading-[1.05]">
              {contactSection.heading}
            </h2>
            <p className="mt-5 text-chalk-200/75 leading-relaxed">{contactSection.body}</p>

            <div className="mt-10 space-y-5 font-mono text-sm">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-chalk-100 hover:text-amber-signal transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-clay-500 shrink-0" />
                WhatsApp: {contact.phone}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-chalk-100 hover:text-amber-signal transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-clay-500 shrink-0" />
                Call: {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-chalk-100 hover:text-amber-signal transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-clay-500 shrink-0" />
                {contact.email}
              </a>
              <div className="flex items-center gap-3 text-chalk-200/60">
                <span className="h-1.5 w-1.5 rounded-full bg-clay-500 shrink-0" />
                {contact.location} · {contact.availability}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-pitch-900 border border-pitch-700/60 rounded-sm p-8">
                <h3 className="font-display uppercase text-xl text-amber-signal">
                  Match details received
                </h3>
                <p className="mt-3 text-chalk-200/80 leading-relaxed">
                  We'll confirm crew availability over WhatsApp or email within a day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-pitch-900 border border-pitch-700/60 rounded-sm p-7 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="font-mono text-xs tracking-widest text-chalk-200/60 uppercase">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full bg-pitch-950 border border-pitch-700/60 rounded-sm px-4 py-3 text-chalk-50 placeholder:text-chalk-200/30 focus:outline-none focus:border-amber-signal"
                      placeholder="Rajesh Kadam"
                    />
                  </div>
                  <div>
                    <label htmlFor="club" className="font-mono text-xs tracking-widest text-chalk-200/60 uppercase">
                      Club / tournament
                    </label>
                    <input
                      id="club"
                      name="club"
                      type="text"
                      required
                      className="mt-2 w-full bg-pitch-950 border border-pitch-700/60 rounded-sm px-4 py-3 text-chalk-50 placeholder:text-chalk-200/30 focus:outline-none focus:border-amber-signal"
                      placeholder="Dadar Union Cricket Club"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="ground" className="font-mono text-xs tracking-widest text-chalk-200/60 uppercase">
                      Ground
                    </label>
                    <input
                      id="ground"
                      name="ground"
                      type="text"
                      required
                      className="mt-2 w-full bg-pitch-950 border border-pitch-700/60 rounded-sm px-4 py-3 text-chalk-50 placeholder:text-chalk-200/30 focus:outline-none focus:border-amber-signal"
                      placeholder="Shivaji Park"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="font-mono text-xs tracking-widest text-chalk-200/60 uppercase">
                      Match date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className="mt-2 w-full bg-pitch-950 border border-pitch-700/60 rounded-sm px-4 py-3 text-chalk-50 focus:outline-none focus:border-amber-signal"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="font-mono text-xs tracking-widest text-chalk-200/60 uppercase">
                    Match details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className="mt-2 w-full bg-pitch-950 border border-pitch-700/60 rounded-sm px-4 py-3 text-chalk-50 placeholder:text-chalk-200/30 focus:outline-none focus:border-amber-signal resize-none"
                    placeholder="Format, number of matches, any sponsor branding you'd like on the overlay..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto font-mono text-sm tracking-widest uppercase bg-ball-500 hover:bg-ball-400 transition-colors text-chalk-50 px-7 py-3.5 rounded-sm"
                >
                  Send match details
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
