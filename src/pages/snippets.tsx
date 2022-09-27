import type { InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";

import { getAllFilesMatter } from "@/lib/mdx";

import SnippetCard from "@/components/cards/SnippetCard";
import Layout from "@/components/layouts/Layout";
import Section from "@/components/layouts/Section";
const Snippets: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  return (
    <>
      <NextSeo title="Snippets" />
      <Layout>
        {/*  Start Snippets */}
        <Section label="Snippets">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
              {articles.map((post) => (
                <SnippetCard key={post.title} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-6 text-center">
              <p>No Item</p>
            </div>
          )}
        </Section>
        {/* End Snippets */}
      </Layout>
    </>
  );
};

export default Snippets;

export async function getStaticProps() {
  const articles = await getAllFilesMatter("snippets");
  return { props: { articles } };
}
