/* eslint-disable @typescript-eslint/no-explicit-any */
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { join } from "path";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { ContentType, PickFrontmatter } from "@/types/content";

const contentPath = join(process.cwd(), "data", "_contents");

export const getAllFileNames = async (type: ContentType) => {
  return readdirSync(join(contentPath, type));
};

export const getFileBySlug = async (type: ContentType, slug: string) => {
  const source = slug
    ? readFileSync(join(contentPath, type, `${slug}.mdx`), "utf8")
    : readFileSync(join(contentPath, `${type}.mdx`), "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["hash-anchor"],
            },
          },
        ],
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  };
};

export const getAllFilesMatter = async <T extends ContentType>(type: T) => {
  const files = readdirSync(join(contentPath, type));

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, slug) => {
    const source = readFileSync(join(contentPath, type, slug), "utf8");
    const { data } = matter(source);
    const result = [
      {
        ...(data as PickFrontmatter<T>),
        url: "/" + type + "/" + getSlug(slug),
        source: "Markdown",
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
    return result;
  }, []);
};

export const getSlug = (filename: string) => filename.replace(".mdx", "");
