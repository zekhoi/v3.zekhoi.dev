import { useTheme } from "next-themes";

import clsxm from "@/lib/clsxm";
import { createBGVariants, getRandomColor, variants } from "@/lib/color";

import TechIcons from "@/components/icons/TechIcons";
import UnstyledLink from "@/components/links/UnstyledLink";

import { ResourceCardType } from "@/types/card";
import { TechListType } from "@/types/global";

import { coloronlydark, onlygray } from "~root/site.config";

const SnippetCard = ({ post }: ResourceCardType) => {
  const { theme } = useTheme();
  const color = getRandomColor(variants);
  const colorScheme = createBGVariants(color, "gradient");
  return (
    <article
      className={clsxm(
        "group block rounded-md bg-gradient-to-tr p-0.5 shadow transition duration-100 hover:scale-[1.03] active:scale-[0.97]",
        colorScheme,
        {
          ["from-gray-200 to-gray-300 dark:from-gray-500 dark:to-gray-600"]:
            (theme === "light" && coloronlydark) || onlygray,
        }
      )}
    >
      <UnstyledLink
        href="/"
        className="relative flex h-full flex-col space-y-3 rounded-md bg-white p-4 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
      >
        <div className="flex h-full flex-col">
          <h4 className="text-xl font-bold line-clamp-2 group-hover:line-clamp-none">
            {post.title}
          </h4>
          <div className="mb-3 mt-1">
            <TechIcons techs={post.stacks as Array<TechListType>} />
          </div>
          <p className="flex-1 font-extralight text-gray-700 line-clamp-2 group-hover:line-clamp-none dark:text-gray-200">
            {post.description}
          </p>
        </div>
      </UnstyledLink>
    </article>
  );
};

export default SnippetCard;
