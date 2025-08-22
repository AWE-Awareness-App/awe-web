import { AuthApi, Configuration, LoginRequest } from '../generated';

// Create a configuration with the base path
const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
});

// Create the API client
const authApi = new AuthApi(config);

// Define the login response type
export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

/**
 * Login with email and password
 */
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const loginRequest: LoginRequest = { email, password };
    const response = await authApi.authLoginPost(loginRequest);
    
    if (!response.data.token || !response.data.user) {
      throw new Error('Invalid response from authentication server');
    }
    
    // Ensure we have valid user data
    const userData = response.data.user;
    if (!userData) {
      throw new Error('No user data in response');
    }

    return {
      token: response.data.token || '',
      user: {
        id: userData.id || '',
        email: userData.email || '',
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
      },
    };
  } catch (error) {
    console.error('Login error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Login failed';
    throw new Error(errorMessage);
  }
};

/**
 * Register a new user
 */
export const register = async (userData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'COACH' | 'PATIENT' | 'SPEAKER';
}): Promise<{ success: boolean }> => {
  try {
    await authApi.authRegisterPost({
      ...userData,
      // The generated API expects these exact property names
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Registration failed';
    throw new Error(errorMessage);
  }
};

/**
 * Validate an authentication token
 */
export const validateToken = async (token: string): Promise<{ valid: boolean }> => {
  try {
    const response = await authApi.authValidateGet({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { valid: response.status === 200 };
  } catch (error) {
    console.error('Token validation error:', error);
    return { valid: false };
  }
};
