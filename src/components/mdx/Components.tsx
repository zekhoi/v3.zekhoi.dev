import Image from "next/image";

import TechIcons from "@/components/icons/TechIcons";
import Code from "@/components/mdx/Code";
import MarkdownLink from "@/components/mdx/MarkdownLink";
import Pre from "@/components/mdx/Pre";
const MDXComponents = {
  a: MarkdownLink,
  Image,
  pre: Pre,
  code: Code,
  TechIcons,
};

export default MDXComponents;
