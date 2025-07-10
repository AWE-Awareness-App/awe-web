import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import DefaultLayout from '../../components/DefaultLayout';
import { getAllBlogPosts } from '@repositories/BlogRepository';

interface BlogPostPageProps {
  post: any;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <DefaultLayout activePage="blog">
      <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{post.title} - AWE Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a href="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            ← Back to all articles
          </a>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
            <span className="mx-2">•</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
          
          <div className="mt-4 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{post.author}</span>
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                {post.author.charAt(0)}
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{post.author}</p>
            </div>
          </div>
        </div>

        <div className="h-96 w-full rounded-xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="prose prose-orange prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8">
            {post.content}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <a 
              href="/blogs" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              ← Back to all articles
            </a>
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-500">
                <span className="sr-only">Share on Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="text-blue-600 hover:text-blue-500">
                <span className="sr-only">Share on LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
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
  const posts = await getAllBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const post = getAllBlogPosts().then((posts) => posts.find((p) => p.slug === slug));

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // Regenerate the page every 60 seconds
  };
};
