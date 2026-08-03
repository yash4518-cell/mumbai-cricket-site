import { Schema, model, type InferSchemaType } from "mongoose";

const matchSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 150 },
    ground: { type: String, required: true, trim: true, maxlength: 150 },
    format: { type: String, required: true, trim: true, maxlength: 50 },
    matchDate: { type: Date, required: true },
    result: { type: String, trim: true, maxlength: 200, default: "" },
    tag: { type: String, trim: true, maxlength: 30, default: "" },
    youtubeUrl: { type: String, trim: true, maxlength: 300, default: "" },
  },
  { timestamps: true }
);

export type Match = InferSchemaType<typeof matchSchema>;
export const MatchModel = model("Match", matchSchema);
