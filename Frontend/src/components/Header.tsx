import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-pitch-950/95 backdrop-blur border-b border-pitch-700/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ball-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-ball-500" />
          </span>
          <span className="font-display text-lg tracking-wide text-chalk-100 uppercase">
            {siteData.brand.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {siteData.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="font-mono text-xs tracking-widest text-chalk-200/80 hover:text-amber-signal transition-colors uppercase"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteData.brand.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest uppercase bg-ball-500 hover:bg-ball-400 text-chalk-50 px-4 py-2 rounded-sm transition-colors"
          >
            Subscribe
          </a>
        </nav>

        <button
          className="md:hidden text-chalk-100 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-pitch-950 border-t border-pitch-700/60 px-5 py-4 flex flex-col gap-4">
          {siteData.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-widest text-chalk-200/80 uppercase"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteData.brand.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="font-mono text-sm tracking-widest uppercase bg-ball-500 text-chalk-50 px-4 py-2.5 rounded-sm text-center"
          >
            Subscribe
          </a>
        </div>
      )}
    </header>
  );
}
