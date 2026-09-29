import "server-only";

const BACKEND = process.env.BACKEND_URL ?? "http://localhost:8000";

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BACKEND}${path}`, {
    cache: "no-store",
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) throw new ApiError(res.status, `${path} failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export type Timestamp = { timestamp: string; unix: number };

export const api = {
  timestamp: () => request<Timestamp>("/api/timestamp"),
  // add new endpoints here, e.g.:
  // documents: () => request<Doc[]>("/api/documents"),
};