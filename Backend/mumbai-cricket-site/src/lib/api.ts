// Base URL of the backend API. Set VITE_API_URL in a .env file at the project
// root (see .env.example) when the backend is on a different origin.
// For local development, the frontend will proxy requests to http://localhost:4000.
const API_URL = import.meta.env.VITE_API_URL || "";

export type BookingPayload = {
  name: string;
  club: string;
  ground: string;
  matchDate: string;
  details?: string;
  email?: string;
  phone?: string;
};

export async function submitBooking(payload: BookingPayload): Promise<void> {
  const res = await fetch(`${API_URL}/api/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed with status ${res.status}`);
  }
}

export type ApiMatch = {
  _id: string;
  title: string;
  ground: string;
  format: string;
  matchDate: string;
  result?: string;
  tag?: string;
  youtubeUrl?: string;
};

export async function fetchMatches(): Promise<ApiMatch[]> {
  const res = await fetch(`${API_URL}/api/matches`);
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
  return res.json();
}
