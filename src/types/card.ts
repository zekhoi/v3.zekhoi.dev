import { ContentType } from "@/types/content";
import { BlogFrontmatter, SnippetFrontmatter } from "@/types/content";
import { TechListType } from "@/types/global";
export type ProjectCardProps = {
  title: string;
  image?: string;
  url: string;
  description: string;
  stacks: string[];
};

export type ResourceCardProps = {
  title: string;
  description: string;
  stacks?: TechListType[];
};

export type BlogCardType = {
  post: BlogFrontmatter;
};

export type SnippetCardType = {
  post: SnippetFrontmatter;
};

export type ResourceCardType = {
  post: ResourceCardProps;
};

export type ProjectCardType = {
  post: ProjectCardProps;
};

export type PickCard<T extends ContentType> = T extends "blog"
  ? BlogFrontmatter
  : T extends "project"
  ? ProjectCardProps
  : T extends "resource"
  ? ResourceCardProps
  : SnippetFrontmatter;
