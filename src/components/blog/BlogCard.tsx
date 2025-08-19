import { BasicBlogPost } from '@generated/api';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

// Client-side only component to handle date formatting
const FormattedDate = ({ dateString }: { dateString: string }) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (!dateString) {
      setFormattedDate('');
      return;
    }
    
    try {
      const date = new Date(dateString);
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        console.warn('Invalid date string:', dateString);
        setFormattedDate('');
        return;
      }
      setFormattedDate(format(date, 'MMMM d, yyyy'));
    } catch (error) {
      console.error('Error formatting date:', error);
      setFormattedDate('');
    }
  }, [dateString]);

  return <span>{formattedDate}</span>;
};


export const BlogCard = ({ post }: { post: BasicBlogPost }) => {
  return (
    <Link href={`/blogs/${post.slug}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="h-48 w-full overflow-hidden">
          <img
            src={post.imageUrl || '/images/placeholder-blog.jpg'}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <FormattedDate dateString={post.publishDate} />
            <span className="mx-2">•</span>
            <span>{post.readTime} min{post.readTime !== 1 ? 's' : ''}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-1">
            {post.shortDescription ? post.shortDescription + '...' : 'No content available'}
          </p>
          <div className="flex items-center justify-between mt-auto">
            {post.tags && post.tags.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            <span className="text-sm font-medium text-blue-600 group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
