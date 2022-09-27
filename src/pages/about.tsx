import type { NextPage } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useTheme } from "next-themes";

import clsxm from "@/lib/clsxm";
import { createBGVariants, getRandomColor, variants } from "@/lib/color";

import Layout from "@/components/layouts/Layout";
import Section from "@/components/layouts/Section";
import Timeline from "@/components/Timeline";

import {
  about,
  coloronlydark,
  educations,
  onlygray,
  profile,
} from "~root/site.config";

const About: NextPage = () => {
  const { theme } = useTheme();
  const selected = createBGVariants(getRandomColor(variants), "gradient");
  const color = selected ?? "from-primary-400 to-primary-600";
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
              className={clsxm("rounded-md bg-gradient-to-t", color, {
                ["from-gray-200 to-gray-300"]:
                  (theme === "light" && coloronlydark) || onlygray,
              })}
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
