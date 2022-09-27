import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import React, { useState } from "react";

import { getAllFileNames, getFileBySlug, getSlug } from "@/lib/mdx";

import Layout from "@/components/layouts/Layout";
import Section from "@/components/layouts/Section";
import Components from "@/components/mdx/Components";

import { blogthumbnail, name } from "~root/site.config";

const BlogPost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  code,
  frontmatter,
}) => {
  const Content = React.useMemo(() => getMDXComponent(code), [code]);
  const [imageSource, setImageSource] = useState(frontmatter.thumbnail);
  return (
    <>
      <NextSeo title={frontmatter.title} />
      <Layout>
        {/*  Start Thumbnail */}
        <Section>
          <figure className="w-full rounded-md">
            <Image
              src={imageSource ?? blogthumbnail}
              width={1920}
              height={768}
              placeholder="blur"
              blurDataURL={blogthumbnail}
              onError={() => setImageSource(blogthumbnail)}
              layout="responsive"
              className="rounded-md"
              alt={frontmatter.description}
            />
          </figure>
        </Section>
        {/*  End Thumbnail */}
        {/*  Start Article */}
        <Section>
          <div className="mt-5 flex flex-col space-y-3">
            <div className="space-y-1 border-b border-gray-300 pt-6 pb-2 dark:border-gray-600">
              <h1 className="text-2xl font-bold lg:text-4xl ">
                {frontmatter.title}
              </h1>
              <p className="font-medium text-gray-500">
                {new Date(Date.parse(frontmatter.publishedAt)).toDateString()}{" "}
                by {name}.
              </p>
            </div>
            <article className="mdx prose mt-4 w-full text-justify transition-colors dark:prose-dark xl:max-w-none 2xl:prose-xl">
              <Content
                components={
                  {
                    ...Components, // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  } as any
                }
              />
            </article>
          </div>
        </Section>
        {/* End Article */}
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllFileNames("blog");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: getSlug(post),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug("blog", params?.slug as string);
  return {
    props: { ...post },
  };
};

export default BlogPost;
