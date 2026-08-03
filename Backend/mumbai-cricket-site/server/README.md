# Mumbai Cricket — Backend API

Express + TypeScript API backed by MongoDB. Handles match-coverage booking
enquiries from the contact form and serves match data for the "Past Streams"
section.

## Setup

1. `cd server`
2. `npm install`
3. Copy the env file and fill it in:
   ```
   cp .env.example .env
   ```
   - `MONGODB_URI` — a local MongoDB instance (`mongodb://127.0.0.1:27017/mumbai-cricket`)
     or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster connection string.
   - `ADMIN_API_KEY` — any long random string; required in the `x-admin-key`
     header to view bookings or manage matches.
   - `CLIENT_ORIGIN` — the frontend's URL (`http://localhost:5173` in dev).
4. Start it:
   ```
   npm run dev
   ```
   The API runs at `http://localhost:4000` by default.
5. (Optional) Load some starter matches:
   ```
   npm run seed
   ```

## Endpoints

| Method | Route              | Auth       | Purpose                              |
|--------|--------------------|------------|---------------------------------------|
| GET    | `/api/health`       | none       | Health check                          |
| POST   | `/api/bookings`      | none       | Submit a match-coverage enquiry       |
| GET    | `/api/bookings`      | admin key  | List all enquiries                    |
| PATCH  | `/api/bookings/:id`  | admin key  | Update a booking's status             |
| GET    | `/api/matches`       | none       | List past streams (for the website)   |
| POST   | `/api/matches`       | admin key  | Add a past stream                     |
| DELETE | `/api/matches/:id`   | admin key  | Remove a past stream                  |

Admin routes require an `x-admin-key: <ADMIN_API_KEY>` header — e.g.:
```
curl -H "x-admin-key: your-key-here" http://localhost:4000/api/bookings
```

## Build for production

```
npm run build
npm start
```
Deploy `server/` to any Node host (Render, Railway, Fly.io, a VPS, etc.) and
point `MONGODB_URI` at your production database. Update `CLIENT_ORIGIN` to
your live frontend URL, and set `VITE_API_URL` in the frontend's `.env` to
your live API URL.

## Notes

- The admin-key check is a simple shared-secret gate, fine for a single
  operator. Swap in real authentication before adding multiple staff logins.
- Rate limiting is applied to `/api/bookings` (10 requests / 15 min per IP)
  to curb spam submissions.

## Booking notifications (email / WhatsApp)

Every submission to `POST /api/bookings` is saved to MongoDB **and**
forwarded straight to the operator over email and/or WhatsApp, handled in
`server/src/lib/notify.ts`. Both channels are optional and independent —
fill in either block in `.env`, or both, or neither (it just logs and skips).

**Email** — sent via SMTP through `nodemailer`. Set `SMTP_HOST`, `SMTP_PORT`,
`SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, and `NOTIFY_EMAIL` (the inbox that
should receive enquiries). Gmail works well with an
[App Password](https://myaccount.google.com/apppasswords) — regular Gmail
passwords won't work over SMTP.

**WhatsApp** — sent via Meta's official WhatsApp Cloud API. You'll need:
1. A Meta developer app with the WhatsApp product added
   ([developers.facebook.com/apps](https://developers.facebook.com/apps)).
2. From the app's WhatsApp → API Setup page: an access token and a
   "Phone number ID".
3. `WHATSAPP_TO` — your own business WhatsApp number, digits only with
   country code (e.g. `918652654866`), which is where enquiries land.

Set `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, and `WHATSAPP_TO` in `.env`.

> **Important limitation:** Meta's Cloud API only allows free-form text
> messages to a number that has messaged your business number within the
> last 24 hours. Outside that window, you'd need a pre-approved message
> template instead of plain text. For a single-operator setup, the simplest
> fix is to send your business WhatsApp number one message yourself to open
> the 24-hour window, or re-open it periodically. Because of this, the
> contact form's "Message us on WhatsApp" link on the site (a `wa.me` deep
> link with the enquiry pre-filled) is kept as a guaranteed-to-work backup —
> it opens the visitor's own WhatsApp with the message ready to send, no API
> or approval required.

If notifications aren't configured, bookings still save to MongoDB — you
can always view them at `GET /api/bookings` with the admin key.
