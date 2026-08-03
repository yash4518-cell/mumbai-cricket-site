import type { Request, Response, NextFunction } from "express";

// Protects admin-only routes (viewing bookings, adding matches) with a shared
// secret key. Not a full auth system — fine for a single-operator site, but
// swap in real authentication (sessions, JWT, etc.) before this handles
// multiple staff accounts or anything more sensitive.
export function adminAuth(req: Request, res: Response, next: NextFunction) {
  const key = req.header("x-admin-key");
  const expected = process.env.ADMIN_API_KEY;

  if (!expected) {
    res.status(500).json({ error: "Server misconfigured: ADMIN_API_KEY is not set." });
    return;
  }

  if (!key || key !== expected) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  next();
}
