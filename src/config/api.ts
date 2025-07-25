// API configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.awedigitalwellness.com';
export const BREVO_API_KEY = process.env.BREVO_API_KEY || '';
export const BREVO_EMAIL_SENDER = process.env.BREVO_SENDER_EMAIL || '';

export const API_ENDPOINTS = {
  WORKSHOPS: '/workshops',
  BLOGS: '/blogs',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  // Add other API endpoints here as needed
} as const;
