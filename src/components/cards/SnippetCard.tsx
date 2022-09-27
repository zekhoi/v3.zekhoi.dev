import { useTheme } from "next-themes";

import clsxm from "@/lib/clsxm";
import { createBGVariants, getRandomColor, variants } from "@/lib/color";

import TechIcons from "@/components/icons/TechIcons";
import UnstyledLink from "@/components/links/UnstyledLink";

import { SnippetCardType } from "@/types/card";
import { TechListType } from "@/types/global";

import { coloronlydark, onlygray } from "~root/site.config";

const SnippetCard = ({ post }: SnippetCardType) => {
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
        className="relative flex flex-col h-full p-4 space-y-3 bg-white rounded-md hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
      >
        <div className="flex flex-col h-full">
          <h4 className="text-xl font-bold line-clamp-2 group-hover:line-clamp-none">
            {post.title}
          </h4>
          <div className="mt-1 mb-3">
            <TechIcons techs={post.tag.split(",") as Array<TechListType>} />
          </div>
          <p className="flex-1 text-gray-700 font-extralight line-clamp-2 group-hover:line-clamp-none dark:text-gray-200">
            {post.description}
          </p>
        </div>
      </UnstyledLink>
    </article>
  );
};

export default SnippetCard;
