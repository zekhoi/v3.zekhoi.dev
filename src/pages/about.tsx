import type { NextPage } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Layout from "@/components/layouts/Layout";
import Section from "@/components/layouts/Section";
import Timeline from "@/components/Timeline";

import educations from "~root/data/educations";
import { about, profile } from "~root/data/site.config";

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About" />
      <Layout>
        {/*  Start About */}
        <Section label="About me">
          <h1 className="mb-1 text-3xl font-extrabold tracking-wide">
            Khoironi Kurnia Syah
          </h1>
          <figure className="float-right ml-6 w-36 rounded shadow-md md:w-72">
            <Image
              src={profile}
              width={500}
              height={500}
              layout="responsive"
              className="rounded-md bg-gradient-to-t from-gray-200 to-gray-300"
              alt="Me"
            />
          </figure>
          <article className="prose dark:prose-dark 2xl:text-lg">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </Section>
        {/* End About */}
        {/*  Start Education */}
        <Section label="Educations" className="my-3">
          <Timeline data={educations} />
        </Section>
        {/* End Education */}
      </Layout>
    </>
  );
};

export default About;
