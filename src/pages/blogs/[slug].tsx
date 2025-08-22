import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import DefaultLayout from '../../components/DefaultLayout';
import { getBlogPostBySlug } from '@repositories/BlogRepository';
import { BlogPost } from '../../generated';
import { format } from 'date-fns';

interface BlogPostPageProps {
  post: BlogPost | null;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <DefaultLayout activePage="blog">
        <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading post...</p>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  if (!post) {
    return (
      <DefaultLayout activePage="blog">
        <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h1>
            <p className="text-gray-600 mb-6">The requested blog post could not be found.</p>
            <a 
              href="/blogs" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to all articles
            </a>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  // Format the date consistently for both server and client
  const [formattedDate, setFormattedDate] = useState('');
  const [publishDate, setPublishDate] = useState<Date>(new Date());

  useEffect(() => {
    // This effect only runs on the client side
    const date = post.publishDate ? new Date(post.publishDate) : new Date();
    setPublishDate(date);
    setFormattedDate(format(date, 'MMMM d, yyyy'));
  }, [post.publishDate]);
  const readTimeText = post.readTime === 1 ? '1 min read' : `${post.readTime} mins read`;

  return (
    <DefaultLayout activePage="blog">
      <div className="w-full min-h-screen bg-gray-50">
        <Head>
          <title>{`${post.title} - AWE Blog`}</title>
          <meta name="description" content={post.content?.substring(0, 160) || 'Read this article on our blog'} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.content?.substring(0, 160) || ''} />
          {post.imageUrl && <meta property="og:image" content={post.imageUrl} />}
        </Head>

        <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <a 
              href="/blogs" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to all articles
            </a>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm text-gray-500 mb-8 gap-4">
              <div className="flex items-center">
                {post.authorImageUrl && (
                  <img 
                    src={post.authorImageUrl} 
                    alt={post.authorName}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                )}
                <div>
                  <p className="text-gray-900 font-medium">{post.authorName}</p>
                  <div className="flex items-center">
                    <time dateTime={publishDate.toISOString()} className="text-gray-500">
                      {formattedDate}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{readTimeText}</span>
                  </div>
                </div>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 sm:ml-auto">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {post.imageUrl && (
            <div className="h-96 w-full rounded-xl overflow-hidden mb-8 relative">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
          <div className="w-full overflow-x-hidden mt-8">
            <div className="text-gray-700 leading-8">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="text-xl mb-4">{children}</p>,
                  h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,
                  ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
                  li: ({ children }) => <li className="mb-2">{children}</li>,
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-orange-300 pl-4 italic my-4">
                      {children}
                    </blockquote>
                  ),
                  // Simplified code block handling
                  code: ({ className, children }) => (
                    <code className="bg-gray-100 px-1.5 py-0.5 rounded">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                      {children}
                    </pre>
                  ),
                  img: ({ src, alt }) => (
                    <div className="my-6">
                      <img
                        src={src}
                        alt={alt || ''}
                        className="rounded-lg shadow-md w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  )
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <a
                href="/blogs"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                ← Back to all articles
              </a>
              <div className="flex flex-wrap gap-4 justify-center items-center my-6 w-full relative">
                <button onClick={() => {
                  const url = window.location.href;
                  const title = post.title;
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
                }} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="text-blue-600 font-medium">Twitter</span>
                </button>
                <button onClick={() => {
                  const url = window.location.href;
                  const title = post.title;
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
                }} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-blue-600 font-medium">LinkedIn</span>
                </button>
                <button onClick={() => {
                  const url = window.location.href;
                  const title = post.title;
                  window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`);
                }} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" />
                  </svg>
                  <span className="text-blue-600 font-medium">Email</span>
                </button>
                <button onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" />
                  </svg>
                  <span className="text-blue-600 font-medium">Copy Link</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </DefaultLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Return no paths at build time, and generate pages on-demand
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  try {
    if (!params?.slug) {
      return {
        notFound: true,
      };
    }

    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
      console.log(`Post with slug ${slug} not found`);
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: JSON.parse(JSON.stringify(post)), // Ensure date objects are serialized
      },
      revalidate: 60, // Regenerate the page every 60 seconds
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
};
