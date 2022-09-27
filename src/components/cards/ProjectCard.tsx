import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";

import clsxm from "@/lib/clsxm";
import { createBGVariants, getRandomColor, variants } from "@/lib/color";

import TechIcons from "@/components/icons/TechIcons";
import UnstyledLink from "@/components/links/UnstyledLink";

import { ProjectCardType } from "@/types/card";
import { TechListType } from "@/types/global";

import { coloronlydark, onlygray } from "~root/site.config";
const ProjectCard = ({ post }: ProjectCardType) => {
  const { theme } = useTheme();
  const color = getRandomColor(variants);
  const colorScheme = createBGVariants(color, "gradient");
  const [imageSource, setImageSource] = useState(post.image);
  return (
    <article
      className={clsxm(
        "block rounded-md bg-gradient-to-tr p-0.5 shadow transition duration-100 hover:scale-[1.03] active:scale-[0.97]",
        colorScheme,
        {
          ["from-gray-200 to-gray-300 dark:from-gray-500 dark:to-gray-600"]:
            (theme === "light" && coloronlydark) || onlygray,
        }
      )}
    >
      <UnstyledLink
        href={post.url}
        className={clsxm(
          "relative flex h-full flex-col space-y-3 rounded-md bg-white p-4 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800",
          colorScheme,
          {
            ["border-gray-200 dark:border-gray-600"]:
              theme === "light" && coloronlydark,
          }
        )}
      >
        <figure className="w-full rounded-md">
          <Image
            src={imageSource ?? "/img/thumbnail.png"}
            width={1920}
            height={1080}
            placeholder="blur"
            blurDataURL="/img/thumbnail.png"
            onError={() => setImageSource("/img/thumbnail.png")}
            layout="responsive"
            className="rounded-md"
            alt={post.title}
          />
        </figure>
        <div className="flex h-full flex-col space-y-3">
          <h4 className="text-xl font-bold">{post.title}</h4>
          <p className="flex-1 font-extralight text-gray-700 dark:text-gray-200">
            {post.description}
          </p>
          <TechIcons techs={post.stacks as Array<TechListType>} />
        </div>
      </UnstyledLink>
    </article>
  );
};

export default ProjectCard;
