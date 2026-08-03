import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { connectDB } from "./db.js";
import { bookingsRouter } from "./routes/bookings.js";
import { matchesRouter } from "./routes/matches.js";

const PORT = Number(process.env.PORT) || 4000;
const ALLOWED_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

async function main() {
  await connectDB();

  const app = express();

  app.use(helmet());
  app.use(cors({ origin: ALLOWED_ORIGIN }));
  app.use(express.json({ limit: "100kb" }));

  // Basic abuse protection on the public write endpoint.
  const bookingLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use("/api/bookings", bookingLimiter);

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.use("/api/bookings", bookingsRouter);
  app.use("/api/matches", matchesRouter);

  app.use((_req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  app.listen(PORT, () => {
    console.log(`[server] listening on http://localhost:${PORT}`);
    console.log(`[server] allowing requests from ${ALLOWED_ORIGIN}`);
  });
}

main().catch((err) => {
  console.error("[server] failed to start:", err);
  process.exit(1);
});
