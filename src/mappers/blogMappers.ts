import { BlogPost } from "@interfaces/BlogPost";

/**
 * Transforms API response data to match our BlogPost interface
 * Handles both new API format and provides backward compatibility
 */
export const transformBlogPostData = (apiPost: any): BlogPost => ({
  id: apiPost.id,
  title: apiPost.title,
  excerpt: apiPost.shortDescription || apiPost.excerpt || '',
  slug: apiPost.slug || apiPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  date: apiPost.publishDate ? new Date(apiPost.publishDate).toISOString().split('T')[0] : apiPost.date,
  author: apiPost.authorName || apiPost.author || 'Unknown Author',
  category: apiPost.category || 'Uncategorized',
  readTime: apiPost.readTime || '5 min read',
  image: apiPost.imageUrl || apiPost.image || '',
  content: apiPost.content || '',
  // Include all original fields for backward compatibility
  ...apiPost
});
