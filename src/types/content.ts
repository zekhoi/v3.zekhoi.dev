export type ContentType = "blog" | "snippets";

export type MediumProps = {
  source: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  categories: string[];
};

export type BlogFrontmatter = {
  source: string;
  title: string;
  url: string;
  publishedAt: string;
  lastUpdated?: string;
  description: string;
  thumbnail?: string;
  tag: string;
};

export type SnippetFrontmatter = {
  title: string;
  url: string;
  publishedAt: string;
  description: string;
  thumbnail: string;
  tag: string;
};

export type PickFrontmatter<T extends ContentType> = T extends "blog"
  ? BlogFrontmatter
  : SnippetFrontmatter;

export type Frontmatter = BlogFrontmatter | SnippetFrontmatter;
