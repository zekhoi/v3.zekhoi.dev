import Image from "next/image";
import { useState } from "react";

import TechIcons from "@/components/icons/TechIcons";
import UnstyledLink from "@/components/links/UnstyledLink";

import { ProjectCardType } from "@/types/card";
import { TechListType } from "@/types/global";

const ProjectCard = ({ post }: ProjectCardType) => {
  const [imageSource, setImageSource] = useState(post.image);
  return (
    <article className="block rounded-md bg-gradient-to-tr p-0.5 shadow transition duration-100 hover:scale-[1.03] active:scale-[0.97] from-gray-200 to-gray-300 dark:from-gray-500 dark:to-gray-600">
      <UnstyledLink
        href={post.url}
        className="relative flex h-full flex-col space-y-3 rounded-md bg-white p-4 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-600"
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
