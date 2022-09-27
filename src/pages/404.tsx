import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import UnstyledLink from "@/components/links/UnstyledLink";
const Page404: NextPage = () => {
  return (
    <>
      {" "}
      <NextSeo title="404 Not Found" nofollow noindex />
      <div className="w-screem flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-4xl font-bold md:text-7xl">404 Not Found</h1>
          <div className="mt-4">
            <UnstyledLink
              href="/"
              className="inline-flex rounded bg-primary-500 px-4 py-2 font-bold text-white hover:scale-[1.03] hover:bg-danger-500 active:scale-[0.97] active:bg-danger-700"
            >
              Back to home
            </UnstyledLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
