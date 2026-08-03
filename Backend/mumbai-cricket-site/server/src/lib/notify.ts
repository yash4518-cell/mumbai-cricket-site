import nodemailer from "nodemailer";
import type { Booking } from "../models/Booking.js";

/**
 * Forwards a new booking enquiry to the operator by email and/or WhatsApp.
 * Both channels are optional and independently configured via env vars —
 * whichever ones are filled in will fire. Failures are logged and never
 * thrown, so a notification problem never breaks the booking submission
 * itself (the enquiry is always saved to MongoDB regardless).
 */

function formatBookingMessage(booking: Booking): string {
  const date = new Date(booking.matchDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const lines = [
    "New match-coverage enquiry — Mumbai Cricket",
    "",
    `Name: ${booking.name}`,
    `Club / tournament: ${booking.club}`,
    `Ground: ${booking.ground}`,
    `Match date: ${date}`,
    booking.email ? `Email: ${booking.email}` : null,
    booking.phone ? `Phone: ${booking.phone}` : null,
    booking.details ? `\nDetails:\n${booking.details}` : null,
  ].filter((line): line is string => line !== null);

  return lines.join("\n");
}

/**
 * Emails the operator via SMTP (nodemailer). Configure with:
 * SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, NOTIFY_EMAIL.
 * Works with Gmail (use an App Password), SendGrid, Mailgun, or any
 * standard SMTP provider. Skipped silently if not configured.
 */
export async function notifyByEmail(booking: Booking): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, NOTIFY_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) {
    console.log("[notify] email not configured — skipping (see server/.env.example)");
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const message = formatBookingMessage(booking);

    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: NOTIFY_EMAIL,
      replyTo: booking.email || undefined,
      subject: `New booking enquiry — ${booking.club} (${booking.ground})`,
      text: message,
    });

    console.log(`[notify] email sent to ${NOTIFY_EMAIL}`);
  } catch (err) {
    console.error("[notify] email failed:", err);
  }
}

/**
 * Sends the operator a WhatsApp message via Meta's WhatsApp Cloud API.
 * Configure with: WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_TO.
 * Requires a Meta developer app with WhatsApp Cloud API enabled — see
 * server/README.md for setup steps and the important limitation on
 * sending free-form text outside a 24-hour customer session window.
 * Skipped silently if not configured.
 */
export async function notifyByWhatsApp(booking: Booking): Promise<void> {
  const { WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_TO } = process.env;

  if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_NUMBER_ID || !WHATSAPP_TO) {
    console.log("[notify] WhatsApp not configured — skipping (see server/.env.example)");
    return;
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v20.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: WHATSAPP_TO,
          type: "text",
          text: { body: formatBookingMessage(booking) },
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`WhatsApp Cloud API responded ${res.status}: ${body}`);
    }

    console.log(`[notify] WhatsApp message sent to ${WHATSAPP_TO}`);
  } catch (err) {
    console.error("[notify] WhatsApp failed:", err);
  }
}

/** Fires both notification channels without letting either block the other. */
export async function notifyNewBooking(booking: Booking): Promise<void> {
  await Promise.allSettled([notifyByEmail(booking), notifyByWhatsApp(booking)]);
}
