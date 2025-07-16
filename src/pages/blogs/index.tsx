import { GetStaticProps } from 'next';
import Head from 'next/head';
import DefaultLayout from '@components/DefaultLayout';
import { getAllBlogPosts } from '@repositories/BlogRepository';
import { BlogCard } from '@components/blog/BlogCard';
import { useNewsletterDialog } from '../../hooks/useNewsletterDialog';
import NewsletterDialog from '@components/newsletter/NewsletterDialog';
import { BlogPost } from '@interfaces/BlogPost';

interface BlogsPageProps {
  posts: BlogPost[];
}

export default function BlogsPage({ posts }: BlogsPageProps) {
  const { isOpen, openDialog, closeDialog } = useNewsletterDialog();

  return (
    <DefaultLayout activePage="blogs">
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Head>
          <title>Blog - AWE</title>
          <meta name="description" content="Explore our latest articles on wellness and mindfulness" />
        </Head>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600">Insights and stories about wellness and mindfulness</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <BlogCard post={post} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500">No blog posts found.</p>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500">
              Want to stay updated?{' '}
              <button 
                onClick={openDialog}
                className="font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Subscribe to our newsletter
              </button>
            </p>
            <NewsletterDialog isOpen={isOpen} onClose={closeDialog} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps<BlogsPageProps> = async () => {
  try {
    const posts = await getAllBlogPosts();
    posts.forEach((post) => {
      post.tags = Array.isArray(post.tags) ? post.tags : (post.tags ? [post.tags] : ['Uncategorized']);
    });
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts || []))
      },
      revalidate: 3600
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        posts: []
      },
      revalidate: 60
    };
  }
};
