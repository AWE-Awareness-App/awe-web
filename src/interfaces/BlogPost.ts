export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
  shortDescription?: string;
  authorName?: string;
  publishDate?: string;
  imageUrl?: string;
  tags?: string[];
}
