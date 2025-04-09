export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";
export const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true";
export const BREVO_API_KEY = process.env.BREVO_API_KEY!;
export const BREVO_EMAIL_SENDER = process.env.BREVO_SENDER_EMAIL