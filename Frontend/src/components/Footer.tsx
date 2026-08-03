import { siteData } from "../data/siteData";

export default function Footer() {
  const { brand, footer, contact } = siteData;

  return (
    <footer className="bg-pitch-950 text-chalk-200/60 border-t border-pitch-700/40 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-ball-500" aria-hidden="true" />
          <span className="font-display uppercase text-sm text-chalk-100">{brand.name}</span>
          <span className="font-mono text-xs">— {footer.note}</span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs tracking-wide">
          <a href={brand.youtubeUrl} target="_blank" rel="noreferrer" className="hover:text-amber-signal transition-colors">
            YouTube
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-amber-signal transition-colors">
            {contact.email}
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
