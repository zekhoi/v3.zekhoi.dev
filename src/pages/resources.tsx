import axios from "axios";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import useSWR from "swr";

import ResourceCard from "@/components/cards/ResourceCard";
import SkeletonCard from "@/components/cards/SkeletonCard";
import Layout from "@/components/layouts/Layout";
import Section from "@/components/layouts/Section";
const Resources: NextPage = () => {
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(process.env.RESOURCES_API_URL, fetcher);
  return (
    <>
      <NextSeo title="Resources" />
      <Layout>
        {/*  Start Resources */}
        <Section label="Resources">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* {data.map(({ title, description }: SourceProps) => (
                <SourceCard
                  key={title}
                  title={title}
                  description={description}
                />
              ))} */}
            {data
              ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.map((resource: any) => (
                  <ResourceCard key={resource.title} post={resource} />
                ))
              : (error || !data) && (
                  <>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                  </>
                )}
          </div>
        </Section>
        {/* End Resources */}
      </Layout>
    </>
  );
};

export default Resources;
