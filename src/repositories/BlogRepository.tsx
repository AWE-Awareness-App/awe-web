import { API_BASE_URL, API_ENDPOINTS } from "@config/api";
import { BasicBlogPost, BlogPost } from "../generated";
import { transformBasicBlogPostData, transformBlogPostData } from "@mappers/blogMappers";
import { BlogsGet200Response } from '../generated';

/**
 * Fetches blog posts from the API with pagination
 */
export const fetchBlogPosts = async (page: number = 1, limit: number = 10): Promise<BasicBlogPost[]> => {
  try {
    const url = `${API_BASE_URL}${API_ENDPOINTS.BLOGS}?page=${page}&limit=${limit}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      cache: 'no-store' // Prevent caching during development
    });
    
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { message: 'Could not parse error response' };
      }
      
      console.error('Failed to fetch blog posts:', {
        url,
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      
      if (response.status === 404) {
        return [];
      }
      
      throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`);
    }

    const data: BlogsGet200Response = await response.json();
    const posts = Array.isArray(data.items) ? data.items : [];
    return posts.map(post => transformBasicBlogPostData(post));
  } catch (error) {
    console.error('Error in fetchBlogPosts:', error);
    return [];
  }
};

/**
 * Fetches a single blog post by its slug
 */
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  if (!slug) {
    console.error('No slug provided to getBlogPostBySlug');
    return undefined;
  }

  const url = `${API_BASE_URL}${API_ENDPOINTS.BLOGS}/${slug}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });
    
    if (response.ok) {
      const postData = await response.json();
      return transformBlogPostData(postData);
    }
    
    if (response.status === 404) {
      console.warn(`Blog post not found with slug: ${slug}`);
      return undefined;
    }
    
    throw new Error(`Failed to fetch blog post: ${response.status} ${response.statusText}`);
  } catch (error) {
    console.error(`Error in getBlogPostBySlug for slug ${slug}:`, error);
    return undefined;
  }
};

/**
 * Get all blog posts with pagination
 */
export const getAllBlogPosts = async (page: number = 1, limit: number = 10): Promise<BasicBlogPost[]> => {
  return fetchBlogPosts(page, limit);
};