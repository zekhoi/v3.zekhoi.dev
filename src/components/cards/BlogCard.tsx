import SVGForCard from "@/components/icons/SVGForCard";
import UnstyledLink from "@/components/links/UnstyledLink";

import { BlogCardType } from "@/types/card";

const BlogCard = ({ post }: BlogCardType) => {
  return (
    <article className="block rounded-md bg-gradient-to-tr p-0.5 shadow transition duration-100 hover:scale-[1.03] active:scale-[0.97] from-gray-200 to-gray-300 dark:from-gray-500 dark:to-gray-600">
      <UnstyledLink
        className="relative flex h-full flex-col rounded-md bg-white p-6 hover:bg-gray-50 hover:bg-opacity-90 dark:bg-gray-900 dark:hover:bg-gray-800 sm:p-8"
        href={post.url}
      >
        <SVGForCard />
        <div className="relative flex h-full flex-col">
          <p className="text-xs font-medium text-gray-500">
            {new Date(Date.parse(post.publishedAt)).toDateString()}
          </p>
          <h5 className="mt-2 flex-1 text-xl font-bold">{post.title}</h5>
          <div className="mt-6 flex items-center justify-between">
            <p className="bg-gradient-to-r bg-clip-text text-lg font-medium text-transparent from-gray-500 to-gray-600">
              {post.source}
            </p>
            <p className="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-500">
              {post.tag}
            </p>
          </div>
        </div>
      </UnstyledLink>
    </article>
  );
};

export default BlogCard;
