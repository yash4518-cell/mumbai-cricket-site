import { Schema, model, type InferSchemaType } from "mongoose";

const bookingSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    club: { type: String, required: true, trim: true, maxlength: 150 },
    ground: { type: String, required: true, trim: true, maxlength: 150 },
    matchDate: { type: Date, required: true },
    details: { type: String, trim: true, maxlength: 2000, default: "" },
    email: { type: String, trim: true, maxlength: 200, default: "" },
    phone: { type: String, trim: true, maxlength: 30, default: "" },
    status: {
      type: String,
      enum: ["new", "confirmed", "declined", "completed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export type Booking = InferSchemaType<typeof bookingSchema>;
export const BookingModel = model("Booking", bookingSchema);
