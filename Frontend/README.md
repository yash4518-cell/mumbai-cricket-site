# Mumbai Cricket — Website

A frontend built with React + TypeScript + Tailwind CSS (v4) for the Mumbai Cricket
YouTube channel (@TheMumbaiCricket) — designed to convert tournament organisers, clubs
and corporate event hosts into paid live-broadcast clients.

## Run it in VS Code

1. Unzip this folder and open it in VS Code (`File > Open Folder`).
2. Open the built-in terminal (`Ctrl + ~` / `` Cmd+` ``) and run:
   ```
   npm install
   npm run dev
   ```
3. Open the local URL it prints (usually `http://localhost:5173`).

To build a production version:
```
npm run build
```
This outputs static files to `dist/` — you can deploy that folder to Vercel, Netlify,
or any static host.

## Editing content

Almost everything on the page — text, stats, grounds covered, past matches, pricing,
testimonials, contact details — lives in **`src/data/siteData.ts`**. Edit that one file
to update the site without touching any component.

## Structure

```
src/
  components/   One file per section (Header, Hero, About, Coverage, PastStreams,
                Services, Testimonials, Contact, Footer) plus two shared pieces:
                SectionTag (eyebrow label) and SeamDivider (the stitched-seam divider
                used between sections).
  data/
    siteData.ts   All editable copy and content.
  index.css       Tailwind import + design tokens (colors, fonts) in an @theme block.
```

## Notes

- The contact form in `Contact.tsx` is frontend-only right now — submitting it just
  shows a confirmation message locally. Wire it to a real backend or a form service
  (e.g. Formspree, a serverless function) before it can actually receive submissions.
  The WhatsApp, call and email links above the form work immediately since they just
  open your device's app.
- The current demo contact details in `src/data/siteData.ts` are:
  - Phone/WhatsApp: `+91 86526 54866`
  - Email: `sushmore27@gmail.com`
- Fonts (Anton, Work Sans, Space Mono) load from Google Fonts via a `<link>` in
  `index.html`.
- Replace the placeholder phone/email/WhatsApp number and match/testimonial content in
  `siteData.ts` with the real details before sending this to anyone.
