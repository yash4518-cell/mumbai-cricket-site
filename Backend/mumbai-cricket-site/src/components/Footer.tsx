import { siteData } from "../data/siteData";

export default function Footer() {
  const { brand, footer, contact } = siteData;

  return (
    <footer className="bg-chalk-100 text-ink-700 border-t border-chalk-200/20 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-ball-600" aria-hidden="true" />
          <span className="font-display uppercase text-sm text-ink-900">{brand.name}</span>
          <span className="font-mono text-xs text-ink-700/70">— {footer.note}</span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs tracking-wide text-ink-700/80">
          <a href={brand.youtubeUrl} target="_blank" rel="noreferrer" className="hover:text-ball-600 transition-colors">
            YouTube
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-ball-600 transition-colors">
            {contact.email}
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
