# Mumbai Cricket — Website

Full-stack site for the Mumbai Cricket YouTube channel (@TheMumbaiCricket):
a React + TypeScript + Tailwind frontend, plus an Express + MongoDB backend
for the booking form and match data.

```
mumbai-cricket-site/
  src/            Frontend (React + TypeScript + Tailwind)
  server/         Backend API (Express + TypeScript + MongoDB)
```

## Run it in VS Code

Open this whole folder in VS Code, then use two terminals (`` Ctrl+Shift+` ``
twice) — one for each half of the stack.

**Terminal 1 — backend:**
```
cd server
npm install
cp .env.example .env
# edit server/.env — at minimum set MONGODB_URI (see server/README.md)
npm run dev
```
Runs at `http://localhost:4000`.

**Terminal 2 — frontend:**
```
npm install
cp .env.example .env
npm run dev
```
Runs at `http://localhost:5173`.

The frontend works even without the backend running — the contact form will
just show an error and "Past Streams" falls back to placeholder data — but
booking submissions and live match data need the backend + a MongoDB
connection to actually work.

See **`server/README.md`** for API routes, admin auth, and deployment notes.
See **`src/data/siteData.ts`** for all the frontend copy (text, pricing,
grounds, testimonials) that isn't pulled from the database.

## Push this to GitHub

From this folder:
```
git init
git add .
git commit -m "Initial commit: Mumbai Cricket site + API"
```
Then create an empty repo on GitHub (no README/gitignore, so it doesn't
conflict) and:
```
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

Both `.env` files are already git-ignored (`.gitignore` in this folder and
in `server/`) so your database URI and admin key won't be committed — only
the `.env.example` templates are tracked.

## Deploying

- **Frontend**: build with `npm run build`, deploy the `dist/` folder to
  Vercel, Netlify, or any static host. Set `VITE_API_URL` there to your
  deployed backend's URL.
- **Backend**: deploy the `server/` folder to a Node host (Render, Railway,
  Fly.io, etc.), or a VPS. Set `MONGODB_URI` to a MongoDB Atlas cluster (or
  another hosted MongoDB) and `CLIENT_ORIGIN` to your deployed frontend's URL.
