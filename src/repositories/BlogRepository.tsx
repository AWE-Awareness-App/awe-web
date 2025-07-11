import { API_BASE_URL, API_ENDPOINTS } from "@config/api";
import { BlogPost } from "@interfaces/BlogPost";
import { transformBlogPostData } from "@mappers/blogMappers";

// Fetch blog posts from API
export const fetchBlogPosts = async (page: number = 1, limit: number = 10): Promise<BlogPost[]> => {
  try {
    const url = `${API_BASE_URL}${API_ENDPOINTS.BLOGS}?page=${page}&limit=${limit}`;
    console.log('Fetching blog posts from:', url);
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      cache: 'no-store' // Prevent caching during development
    });
    
    console.log('Response status:', response.status);
    
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
        headers: Object.fromEntries(response.headers.entries())
      });
      
      // If we get a 404, return an empty array instead of throwing
      if (response.status === 404) {
        console.log('No blog posts found, returning empty array');
        return [];
      }
      
      throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`);
    }

    const data = await response.json().catch(e => {
      console.error('Error parsing JSON response:', e);
      throw new Error('Invalid JSON response from server');
    });
    
    // Handle paginated response
    const posts = Array.isArray(data) ? data : (data.items || []);
    
    return posts.map((post: any) => {
      try {
        return transformBlogPostData(post);
      } catch (error) {
        console.error('Error transforming blog post data:', error, post);
        // Return a minimal valid post object to prevent app crashes
        return {
          id: post.id || 'error-' + Math.random().toString(36).substr(2, 9),
          title: 'Error loading post',
          excerpt: 'There was an error loading this blog post.',
          slug: 'error-loading-post',
          date: new Date().toISOString(),
          author: 'Unknown',
          category: 'Error',
          readTime: '1 min read',
          image: '',
          content: 'There was an error loading this blog post.'
        };
      }
    });
  } catch (error) {
    console.error('Error in fetchBlogPosts:', error);
    // Return an empty array instead of throwing to prevent UI crashes
    return [];
  }
};

// Get blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  // Try to fetch the specific post directly first
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
      const transformedPost = transformBlogPostData(postData);
      return transformedPost;
    }
    
  } catch (error) {
    console.error('Error in getBlogPostBySlug:', error);
  }
  
  // Fallback to fetching all posts if direct fetch fails
  try {
    const posts = await fetchBlogPosts(1, 100);
    return posts.find(post => post.slug === slug);
  } catch (error) {
    console.error('Error in fallback fetch:', error);
    return undefined;
  }
};

// Get all blog posts
export const getAllBlogPosts = async (page: number = 1, limit: number = 10): Promise<BlogPost[]> => {
  return await fetchBlogPosts(page, limit);
};