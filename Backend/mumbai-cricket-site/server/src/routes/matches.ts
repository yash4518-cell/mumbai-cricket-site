import { Router, type Request, type Response } from "express";
import { MatchModel } from "../models/Match.js";
import { adminAuth } from "../middleware/adminAuth.js";

export const matchesRouter = Router();

// GET /api/matches — public: powers the "Past Streams" section on the site
matchesRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const matches = await MatchModel.find().sort({ matchDate: -1 }).lean();
    res.json(matches);
  } catch (err) {
    console.error("[matches] list failed:", err);
    res.status(500).json({ error: "Could not load matches." });
  }
});

// POST /api/matches — admin only: add a new past stream
matchesRouter.post("/", adminAuth, async (req: Request, res: Response) => {
  try {
    const { title, ground, format, matchDate, result, tag, youtubeUrl } = req.body ?? {};

    if (!title || !ground || !format || !matchDate) {
      res.status(400).json({ error: "title, ground, format and matchDate are required." });
      return;
    }

    const parsedDate = new Date(matchDate);
    if (Number.isNaN(parsedDate.getTime())) {
      res.status(400).json({ error: "matchDate is not a valid date." });
      return;
    }

    const match = await MatchModel.create({
      title,
      ground,
      format,
      matchDate: parsedDate,
      result,
      tag,
      youtubeUrl,
    });

    res.status(201).json(match);
  } catch (err) {
    console.error("[matches] create failed:", err);
    res.status(500).json({ error: "Could not save match." });
  }
});

// DELETE /api/matches/:id — admin only
matchesRouter.delete("/:id", adminAuth, async (req: Request, res: Response) => {
  try {
    const deleted = await MatchModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      res.status(404).json({ error: "Match not found." });
      return;
    }

    res.status(204).send();
  } catch (err) {
    console.error("[matches] delete failed:", err);
    res.status(500).json({ error: "Could not delete match." });
  }
});
