import { NextApiRequest, NextApiResponse } from 'next';
import { API_BASE_URL, API_ENDPOINTS } from '@config/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.USERS}/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).json({ 
      message: error instanceof Error ? error.message : 'Internal server error' 
    });
  }
}
