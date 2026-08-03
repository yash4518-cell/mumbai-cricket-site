import { useState, type FormEvent } from "react";
import { siteData } from "../data/siteData";
import SectionTag from "./SectionTag";
import { submitBooking, type BookingPayload } from "../lib/api";

/** Builds a wa.me deep link pre-filled with the submitted enquiry. */
function buildWhatsAppLink(whatsappNumber: string, data: BookingPayload): string {
  const message = [
    `New match-coverage enquiry — ${data.club}`,
    `Ground: ${data.ground}`,
    `Date: ${data.matchDate}`,
    data.details ? `Details: ${data.details}` : null,
    `From: ${data.name}${data.phone ? ` (${data.phone})` : ""}`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto: link pre-filled with the submitted enquiry. */
function buildMailtoLink(email: string, data: BookingPayload): string {
  const subject = `Booking enquiry — ${data.club} (${data.ground})`;
  const body = [
    `Ground: ${data.ground}`,
    `Date: ${data.matchDate}`,
    data.details ? `Details: ${data.details}` : null,
    `From: ${data.name}${data.phone ? ` (${data.phone})` : ""}`,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const { contactSection, contact } = siteData;
  const [submitted, setSubmitted] = useState<BookingPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload: BookingPayload = {
      name: String(data.get("name") || ""),
      club: String(data.get("club") || ""),
      ground: String(data.get("ground") || ""),
      matchDate: String(data.get("date") || ""),
      details: String(data.get("details") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
    };

    try {
      setLoading(true);
      await submitBooking(payload);
      setSubmitted(payload);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not send your enquiry. Please try WhatsApp or email instead."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-chalk-50 text-ink-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionTag light>{contactSection.eyebrow}</SectionTag>
            <h2 className="font-display uppercase text-3xl sm:text-4xl leading-[1.05]">
              {contactSection.heading}
            </h2>
            <p className="mt-5 text-ink-700 leading-relaxed">{contactSection.body}</p>

            <div className="mt-10 space-y-5 font-mono text-sm">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-ink-900 hover:text-ball-600 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ball-500 shrink-0" />
                WhatsApp: {contact.phone}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-ink-900 hover:text-ball-600 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ball-500 shrink-0" />
                Call: {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-ink-900 hover:text-ball-600 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ball-500 shrink-0" />
                {contact.email}
              </a>
              <div className="flex items-center gap-3 text-ink-700/60">
                <span className="h-1.5 w-1.5 rounded-full bg-ball-500 shrink-0" />
                {contact.location} · {contact.availability}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-chalk-100 border border-chalk-200/30 rounded-sm p-8">
                <h3 className="font-display uppercase text-xl text-ball-600">
                  Match details received
                </h3>
                <p className="mt-3 text-ink-700 leading-relaxed">
                  We'll confirm crew availability over WhatsApp or email within a day.
                  Want it to land instantly? Send it yourself with one tap:
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppLink(contact.whatsapp, submitted)}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sm tracking-widest uppercase bg-ball-600 hover:bg-ball-500 transition-colors text-chalk-50 px-6 py-3 rounded-sm"
                  >
                    Confirm on WhatsApp
                  </a>
                  <a
                    href={buildMailtoLink(contact.email, submitted)}
                    className="font-mono text-sm tracking-widest uppercase border border-ink-200 hover:border-ball-600 hover:text-ball-600 transition-colors text-ink-900 px-6 py-3 rounded-sm"
                  >
                    Confirm by Email
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-chalk-100 border border-chalk-200/30 rounded-sm p-7 sm:p-8 space-y-5">
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
                      className="mt-2 w-full bg-chalk-50 border border-chalk-200 rounded-sm px-4 py-3 text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-ball-600"
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
                      className="mt-2 w-full bg-chalk-50 border border-chalk-200 rounded-sm px-4 py-3 text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-ball-600"
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
                      className="mt-2 w-full bg-chalk-50 border border-chalk-200 rounded-sm px-4 py-3 text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-ball-600"
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
                      className="mt-2 w-full bg-chalk-50 border border-chalk-200 rounded-sm px-4 py-3 text-ink-900 focus:outline-none focus:border-ball-600"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="font-mono text-xs tracking-widest text-chalk-200/60 uppercase">
                      Email (optional)
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2 w-full bg-chalk-50 border border-chalk-200 rounded-sm px-4 py-3 text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-ball-600"
                      placeholder="you@club.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-mono text-xs tracking-widest text-chalk-200/60 uppercase">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full bg-chalk-50 border border-chalk-200 rounded-sm px-4 py-3 text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-ball-600"
                      placeholder="98765 43210"
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
                    className="mt-2 w-full bg-chalk-50 border border-chalk-200 rounded-sm px-4 py-3 text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-ball-600 resize-none"
                    placeholder="Format, number of matches, any sponsor branding you'd like on the overlay..."
                  />
                </div>

                {error && (
                  <p className="font-mono text-xs text-ball-400" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto font-mono text-sm tracking-widest uppercase bg-ball-500 hover:bg-ball-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-chalk-50 px-7 py-3.5 rounded-sm"
                >
                  {loading ? "Sending…" : "Send match details"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
