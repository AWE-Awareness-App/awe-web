import { BlogPost, BasicBlogPost } from '../generated';

/**
 * Transforms API response data to match the generated BlogPost interface
 * Ensures all required fields are properly set with fallbacks
 */
export const transformBlogPostData = (apiPost: Partial<BlogPost>): BlogPost => {
  return {
    id: apiPost.id || '',
    title: apiPost.title || 'Untitled Post',
    content: apiPost.content || '',
    imageUrl: apiPost.imageUrl || null,
    authorName: apiPost.authorName || 'Unknown Author',
    authorImageUrl: apiPost.authorImageUrl || null,
    publishDate: apiPost.publishDate || new Date().toISOString(),
    readTime: apiPost.readTime || 5, // Default to 5 minutes
    slug: apiPost.slug || '',
    tags: apiPost.tags || [],
    ...(apiPost.updatedAt && { updatedAt: apiPost.updatedAt })
  };
};

export const transformBasicBlogPostData = (apiPost: Partial<BasicBlogPost>): BasicBlogPost => {
  return {
    id: apiPost.id || '',
    title: apiPost.title || 'Untitled Post',
    shortDescription: apiPost.shortDescription || '',
    imageUrl: apiPost.imageUrl || null,
    authorName: apiPost.authorName || 'Unknown Author',
    publishDate: apiPost.publishDate || new Date().toISOString(),
    readTime: apiPost.readTime || 5, // Default to 5 minutes
    slug: apiPost.slug || '',
    tags: apiPost.tags || [],
  };
};
