import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import ProjectCard from "@/components/cards/ProjectCard";
import SkeletonCard from "@/components/cards/SkeletonCard";
import Layout from "@/components/layouts/Layout";
import Section from "@/components/layouts/Section";

import projects from "~root/data/projects";
const Projects: NextPage = () => {
  return (
    <>
      <NextSeo title="Projects" />
      <Layout>
        {/*  Start Experience */}
        <Section label="Projects">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard key={project.title} post={project} />
              ))
            ) : (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            )}
          </div>
        </Section>
        {/* End Experience */}
      </Layout>
    </>
  );
};

export default Projects;
