// API configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.aweawareness.com';

export const API_ENDPOINTS = {
  WORKSHOPS: '/workshops',
  // Add other API endpoints here as needed
} as const;
