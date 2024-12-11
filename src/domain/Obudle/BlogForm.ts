export type BlogForm = {
  title: string;
  author: string;
  content: string;
  tags: string[];
  category: string;
  images: File[];
  publishDate: Date | null;
};
