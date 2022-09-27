import type { NextPage } from "next";
import Image from "next/image";
import { useTheme } from "next-themes";

import clsxm from "@/lib/clsxm";
import { createBGVariants, getRandomColor, variants } from "@/lib/color";

import Layout from "@/components/layouts/Layout";
import Section from "@/components/layouts/Section";
import UnstyledLink from "@/components/links/UnstyledLink";
import Timeline from "@/components/Timeline";

import {
  coloronlydark,
  description,
  experiences,
  image,
  name,
  onlygray,
  resume,
  role,
} from "~root/site.config";

const Home: NextPage = () => {
  const { theme } = useTheme();
  const selected = createBGVariants(getRandomColor(variants), "gradient");
  const color = selected ?? "from-primary-400 to-primary-600";
  return (
    <>
      <Layout>
        {/* Start Hero */}
        <div className="container-custom py-4">
          <div className="flex flex-col justify-center text-center md:my-12 md:flex-row md:justify-start md:text-left lg:text-left">
            <div className="flex max-w-lg flex-col justify-center py-6">
              <h2 className="text-xl font-bold tracking-wide md:text-2xl 2xl:text-3xl">
                <span className="after:content-[' '] relative left-0 w-full after:absolute after:left-1 after:bottom-4 after:z-[-1] after:h-1/4 after:w-full after:bg-primary-500">
                  {role}
                </span>
              </h2>
              <h1 className="text-3xl font-extrabold leading-9 tracking-wide md:text-5xl 2xl:text-6xl">
                {name}
              </h1>
              <p className="mt-3 text-base text-gray-700 dark:text-gray-200">
                {" "}
                {description}
              </p>
              <div className="mt-4">
                <UnstyledLink
                  href={resume}
                  className="inline-flex rounded bg-primary-500 px-4 py-2 font-bold text-white hover:scale-[1.03] hover:bg-danger-500 active:scale-[0.97] active:bg-danger-700"
                  newTab
                >
                  Resume
                </UnstyledLink>
              </div>
            </div>
            <div className="flex w-full items-center justify-center md:justify-end">
              <figure className="h-80 w-80 rounded-md shadow-[10px_10px_0_0_rgba(107,114,128,0.3)] dark:shadow-[10px_10px_0_0_rgba(156,163,175,0.3)]">
                <Image
                  src={image}
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
            </div>
          </div>
        </div>
        {/* End Hero */}
        {/*  Start Experience */}
        <Section className="pt-5" label="Experiences" center>
          <Timeline data={experiences} />
        </Section>
        {/* End Experience */}
      </Layout>
    </>
  );
};

export default Home;
