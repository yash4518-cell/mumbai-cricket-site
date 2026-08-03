import "dotenv/config";
import { connectDB } from "./db.js";
import { MatchModel } from "./models/Match.js";
import mongoose from "mongoose";

// Same placeholder matches used in the frontend's src/data/siteData.ts,
// so the API returns something sensible the first time you run it.
// Edit or replace these with real match history, then re-run `npm run seed`.
const seedMatches = [
  { title: "Kanga League Semi-Final", ground: "Shivaji Park", format: "50-over", matchDate: "2026-03-15", result: "Dadar Union won by 34 runs", tag: "LEAGUE" },
  { title: "Corporate Box Cricket Cup", ground: "BKC Grounds", format: "Box Cricket", matchDate: "2026-02-08", result: "Finance XI won by 6 wickets", tag: "CORPORATE" },
  { title: "Mumbai Schools Trophy Final", ground: "Cross Maidan", format: "T20", matchDate: "2026-01-25", result: "St. Xavier's won by 18 runs", tag: "SCHOOLS" },
  { title: "Sunday Maidan Premier League", ground: "Azad Maidan", format: "T20", matchDate: "2026-01-11", result: "Colaba Colts won by 9 wickets", tag: "LEAGUE" },
  { title: "Bandra Turf Championship", ground: "MIG Cricket Club", format: "40-over", matchDate: "2025-12-20", result: "Bandra Blues won by 5 wickets", tag: "TURF" },
  { title: "Republic Day Corporate Cup", ground: "Oval Maidan", format: "T20", matchDate: "2026-01-26", result: "Tech Titans won by 22 runs", tag: "CORPORATE" },
];

async function seed() {
  await connectDB();
  await MatchModel.deleteMany({});
  await MatchModel.insertMany(
    seedMatches.map((m) => ({ ...m, matchDate: new Date(m.matchDate) }))
  );
  console.log(`[seed] inserted ${seedMatches.length} matches`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("[seed] failed:", err);
  process.exit(1);
});
