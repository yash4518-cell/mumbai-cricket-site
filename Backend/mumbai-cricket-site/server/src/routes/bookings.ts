import { Router, type Request, type Response } from "express";
import { BookingModel } from "../models/Booking.js";
import { adminAuth } from "../middleware/adminAuth.js";
import { notifyNewBooking } from "../lib/notify.js";

export const bookingsRouter = Router();

// POST /api/bookings — public: a visitor submits a match-coverage enquiry
bookingsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { name, club, ground, matchDate, details, email, phone } = req.body ?? {};

    if (!name || !club || !ground || !matchDate) {
      res.status(400).json({ error: "name, club, ground and matchDate are required." });
      return;
    }

    const parsedDate = new Date(matchDate);
    if (Number.isNaN(parsedDate.getTime())) {
      res.status(400).json({ error: "matchDate is not a valid date." });
      return;
    }

    const booking = await BookingModel.create({
      name,
      club,
      ground,
      matchDate: parsedDate,
      details,
      email,
      phone,
    });

    // Forward the enquiry to the operator's email/WhatsApp (both optional,
    // configured via server/.env — see server/src/lib/notify.ts). This never
    // throws, so a notification hiccup can't fail the booking submission.
    void notifyNewBooking(booking);

    res.status(201).json({ id: booking._id, createdAt: booking.createdAt });
  } catch (err) {
    console.error("[bookings] create failed:", err);
    res.status(500).json({ error: "Could not save your enquiry. Please try again." });
  }
});

// GET /api/bookings — admin only: list enquiries, newest first
bookingsRouter.get("/", adminAuth, async (_req: Request, res: Response) => {
  try {
    const bookings = await BookingModel.find().sort({ createdAt: -1 }).lean();
    res.json(bookings);
  } catch (err) {
    console.error("[bookings] list failed:", err);
    res.status(500).json({ error: "Could not load bookings." });
  }
});

// PATCH /api/bookings/:id — admin only: update status (new/confirmed/declined/completed)
bookingsRouter.patch("/:id", adminAuth, async (req: Request, res: Response) => {
  try {
    const { status } = req.body ?? {};
    const allowed = ["new", "confirmed", "declined", "completed"];

    if (!allowed.includes(status)) {
      res.status(400).json({ error: `status must be one of: ${allowed.join(", ")}` });
      return;
    }

    const updated = await BookingModel.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      res.status(404).json({ error: "Booking not found." });
      return;
    }

    res.json(updated);
  } catch (err) {
    console.error("[bookings] update failed:", err);
    res.status(500).json({ error: "Could not update booking." });
  }
});
