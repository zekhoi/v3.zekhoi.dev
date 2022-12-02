import clsx from "clsx";
import * as React from "react";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiExpress,
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiJsonwebtokens,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { TechIconsProps } from "@/types/global";

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, "flex gap-2")}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <li key={tech} className="text-xl text-gray-800 dark:text-gray-100">
            <current.icon />
          </li>
        );
      })}
    </ul>
  );
}

export const techList = {
  react: {
    icon: SiReact,
    name: "React",
  },
  nextjs: {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
  },
  scss: {
    icon: SiSass,
    name: "SCSS",
  },
  javascript: {
    icon: SiJavascript,
    name: "JavaScript",
  },
  typescript: {
    icon: SiTypescript,
    name: "TypeScript",
  },
  nodejs: {
    icon: SiNodedotjs,
    name: "Node.js",
  },
  firebase: {
    icon: SiFirebase,
    name: "Firebase",
  },
  mongodb: {
    icon: SiMongodb,
    name: "MongoDB",
  },
  swr: {
    icon: IoLogoVercel,
    name: "SWR",
  },
  redux: {
    icon: SiRedux,
    name: "Redux",
  },
  mdx: {
    icon: SiMarkdown,
    name: "MDX",
  },
  prettier: {
    icon: SiPrettier,
    name: "Prettier",
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: "Google Analytics",
  },
  git: {
    icon: SiGit,
    name: "Git",
  },
  notion: {
    icon: SiNotion,
    name: "Notion API",
  },
  express: {
    icon: SiExpress,
    name: "Express.js",
  },
  sequelize: {
    icon: SiSequelize,
    name: "Sequelize",
  },
  jwt: {
    icon: SiJsonwebtokens,
    name: "JWT",
  },
};
