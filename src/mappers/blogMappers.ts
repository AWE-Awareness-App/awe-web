import { BlogPost } from "@interfaces/BlogPost";

/**
 * Transforms API response data to match our BlogPost interface
 * Handles both new API format and provides backward compatibility
 */
export const transformBlogPostData = (apiPost: any): BlogPost => {
  const post: BlogPost = {
    id: apiPost.id,
    title: apiPost.title,
    excerpt: apiPost.shortDescription || apiPost.excerpt || '',
    slug: apiPost.slug,
    date: apiPost.publishDate ? 
      new Date(apiPost.publishDate).toISOString().split('T')[0] : 
      (apiPost.date || new Date().toISOString().split('T')[0]),
    author: apiPost.authorName || apiPost.author || 'Unknown Author',
    authorImageUrl: apiPost.authorImageUrl || '',
    tags: apiPost.tags || 'Uncategorized',
    readTime: apiPost.readTime || '5 min read',
    image: apiPost.imageUrl || apiPost.image || '',
    content: apiPost.content,
  };

  return post;
};
