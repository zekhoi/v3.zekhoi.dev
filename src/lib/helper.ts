import { Dispatch, SetStateAction } from "react";

import { PickCard } from "@/types/card";
import { BlogFrontmatter, ContentType, MediumProps } from "@/types/content";
export const mediumToBlogProps = (array: MediumProps[]) =>
  array.map((object: MediumProps) => ({
    title: object.title,
    publishedAt: object.pubDate,
    url: object.link,
    description: object.description,
    tag: object.categories[0],
    source: "Medium",
    // readingTime: readingTime(object.content),
  }));

export const sortByDate = (posts: BlogFrontmatter[]) =>
  posts.sort(
    (a, b) =>
      new Date(b.lastUpdated ?? b.publishedAt).valueOf() -
      new Date(a.lastUpdated ?? a.publishedAt).valueOf()
  );

export const searchContent = <T extends ContentType>(
  type: T,
  contents: Array<PickCard<T>>,
  keyword: string,
  setPostList: Dispatch<SetStateAction<Array<PickCard<T>>>>,
  setPostLength: Dispatch<SetStateAction<number>>
) => {
  const found = contents.filter((content) => {
    if (keyword == "") {
      return content;
    } else if (
      content.title.toLowerCase().includes(keyword.toLocaleLowerCase()) ||
      content.description.toLowerCase().includes(keyword.toLowerCase())
    ) {
      return content;
    }
  });
  setPostLength(found.length);
  setPostList(found);
};
