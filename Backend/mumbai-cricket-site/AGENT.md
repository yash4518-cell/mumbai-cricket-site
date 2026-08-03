# Mumbai Cricket Agent

This repository contains a Vite + React + TypeScript frontend and an Express + TypeScript backend for the Mumbai Cricket website.

## Project map
- Frontend app lives in the repository root.
- Backend API lives in the server/ folder.
- Shared site copy is in src/data/siteData.ts.
- Booking and match endpoints are in server/src/routes/.

## Working conventions
- Prefer small, focused changes that preserve the existing design system and page structure.
- Use TypeScript and keep components functional.
- Keep copy and reusable content in src/data/siteData.ts where possible.
- For backend changes, keep route handlers simple and validate request payloads before writing to the database.
- Avoid introducing new dependencies unless the task clearly needs them.

## Commands
- Frontend development: npm run dev
- Frontend build: npm run build
- Backend development: cd server && npm run dev
- Backend build: cd server && npm run build
- Backend seeding: cd server && npm run seed

## Before finishing work
- Verify the relevant build or typecheck command succeeds.
- If you change API behavior, confirm the affected route still matches the existing contract.
- Keep environment variables and secrets out of source control.
